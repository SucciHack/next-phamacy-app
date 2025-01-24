"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookBtn from "./bookBtn";
import Image from "next/image";

const carouselItems = [
  {
    image: "/doctors-doing-surgical.jpg",
    title: "Caring for a better life with medication",
    subtitle: "Rhoncus mattis rhoncus urna neque viverra. Pharetra diam sit amet nisl suscipit. Ultrices eros in cursus turpis. In nisl nisi scelerisque eu ultrices vitae. In massa tempor nec feugiat nisl.",
  },
  {
    image: "/hero-doctor.jpg",
    title: "Healthcare Doesn’t Have To Be Expensive.",
    subtitle: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti.",
  },
  {
    image: "/nurse-wearing-scrubs.jpg",
    title: "Healthcare Doesn’t Have To Be Expensive.",
    subtitle: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti.",
  },
];

export default function CustomCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-purple-900 overflow-hidden">
      <div className="absolute inset-0 ">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
              fill
            />
            <div className="absolute inset-0 bg-purple-900/50" />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col items-center justify-center p-6 text-white space-y-3 w-[80%] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold ">
          {carouselItems[currentSlide].title}
          <div className="flex justify-center text-center text-2xl md:text-3xl">
          </div>
        </h2>
        <p className="text-sm md:text-lg lg:text-5xl">{carouselItems[currentSlide].subtitle}</p>
        <BookBtn title="Book Now"/>
        <div className="flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all mb-[100px] ${
                index === currentSlide ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/75 hover:text-white transition-colors "
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/75 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}