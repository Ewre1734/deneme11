"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const SLIDES = [
  {
    image: "/placeholder.svg?height=800&width=1600",
    title: "Lüks Yaşam Alanları",
    description: "Size özel seçilmiş prestijli konutlar",
  },
  {
    image: "/placeholder.svg?height=800&width=1600",
    title: "Modern Ofis Çözümleri",
    description: "İşiniz için en uygun lokasyonlar",
  },
  {
    image: "/placeholder.svg?height=800&width=1600",
    title: "Yatırımlık Fırsatlar",
    description: "Geleceğiniz için akıllı seçimler",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === current ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container px-4 text-center text-white">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{slide.title}</h1>
              <p className="mb-8 text-lg opacity-90 sm:text-xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={() => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${index === current ? "bg-white w-8" : "bg-white/50"}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}

