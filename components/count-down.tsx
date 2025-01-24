"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 10,
    minutes: 22,
    seconds: 49,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          // Reset timer when it reaches zero
          return {
            days: 0,
            hours: 10,
            minutes: 22,
            seconds: 49,
          }
        }

        let newSeconds = prev.seconds - 1
        let newMinutes = prev.minutes
        let newHours = prev.hours
        let newDays = prev.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        if (newHours < 0) {
          newHours = 23
          newDays -= 1
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-[#003087] flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-white text-lg md:text-3xl font-bold mb-12">Limited Offer Hurry Up!</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hrs" },
            { value: timeLeft.minutes, label: "Mins" },
            { value: timeLeft.seconds, label: "Secs" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-sm flex flex-col items-center justify-center">
              <span className="text-[#003087] text-4xl md:text-5xl font-bold">
                {item.value.toString().padStart(2, "0")}
              </span>
              <span className="text-[#003087] text-sm mt-2">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Congue quisque egestas facilisis volutpat est velit egestas dui id. Adipiscing elit duis tristique
          sollicitudin nibh sit amet commodo. Odio aenean sed adipiscing.
        </p>

        <Button className="bg-white text-[#003087] hover:bg-blue-100 font-semibold px-8 py-6 text-lg rounded-full">
          SHOP NOW
        </Button>
      </div>
    </div>
  )
}

