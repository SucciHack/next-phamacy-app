'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import BookButton from "./bookButton"

export function CarouselSize() {
    const categories = [
        {
        image: '/doctors-doing-surgical.jpg',
        name: 'Caring for a better'
        },
        {
        image: '/hero-doctor.jpg',
        name: 'Caring for a better'
        },
        {
        image: '/nurse-wearing-scrubs.jpg',
        name: 'Caring for a better'
        },
        {
        image: '/nurse-wearing-scrubs.jpg',
        name: 'Caring for a better'
        },
        {
        image: '/nurse-wearing-scrubs.jpg',
        name: 'Caring for a better'
        },
        {
        image: '/nurse-wearing-scrubs.jpg',
        name: 'Caring for a better'
        },
    ]
  return (
    <div className="p-16 flex justify-center items-center mt-10">
        <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      opts={{
        align: "start",
      }}
      className="w-full max-w-7xl mb-10"
    >
      <CarouselContent>
        {categories.map((item, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
                  <div key={index} className='flex flex-col items-center justify-between bg-red-400 relative h-[250px] shadow-lg rounded-md overflow-hidden'>
                  <Image src={item.image} alt='' width={400} height={400} className='w-full h-full object-cover'/>
                  <div className='p-2 absolute bottom-0 flex justify-between items-center gap-6 z-10 text-sm'>
                        <p className='text-white text-xl font-bold'>{item.name}</p>
                                      <BookButton />
                                  </div>
                                  <div className="bg-gradient-to-t from-indigo-500 to-transparent opacity-90 absolute bottom-0 w-full h-[120px]"></div>
                              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
