"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Lightbulb, FlaskConical, Rocket } from "lucide-react"

const InnovationCard = ({ innovation, isActive, index }) => {
  const icons = {
    patent: Lightbulb,
    product: Rocket,
    breakthrough: FlaskConical,
  }
  const Icon = icons[innovation.type] || Lightbulb

  return (
    <div
      className={`flex-shrink-0 w-96 bg-white rounded-2xl p-6 shadow-xl border border-gray-50/50 transition-all duration-500 transform ${
        isActive
          ? "scale-105 shadow-2xl shadow-emerald-500/20 animate-in fade-in"
          : "scale-95 opacity-70 hover:scale-100 hover:opacity-100"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img
        src={innovation.image || "/placeholder.svg?height=200&width=300&query=futuristic technology concept"}
        alt={innovation.title}
        className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
      />
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
          <Icon size={20} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{innovation.title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{innovation.description}</p>
      <div className="text-emerald-500 font-semibold text-sm">{innovation.date}</div>
    </div>
  )
}

const InnovationsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const innovations = [
    {
      title: "Quantum AI Processor",
      description:
        "Our latest breakthrough in AI hardware, enabling unprecedented computational speeds for complex data analysis and machine learning models.",
      image: "/images/1.png",
      type: "breakthrough",
      date: "Nov 2024",
    },
    {
      title: "Avexra Cloud 3.0",
      description:
        "The next generation of our secure cloud platform, featuring enhanced scalability, zero-trust architecture, and integrated AI services for enterprise clients.",
      image: "/images/2.png",
      type: "product",
      date: "Oct 2024",
    },
    {
      title: "Patent: Decentralized Identity",
      description:
        "Awarded patent for our innovative decentralized identity verification system, enhancing privacy and security for digital transactions.",
      image: "/images/3.png",
      type: "patent",
      date: "Sep 2024",
    },
    {
      title: "Predictive Analytics Engine",
      description:
        "A new AI-powered engine that provides real-time predictive insights for market trends, supply chain optimization, and customer behavior.",
      image: "/images/4.png",
      type: "product",
      date: "Aug 2024",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % innovations.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, innovations.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + innovations.length) % innovations.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % innovations.length)
  }

  return (
    <section id="innovations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-in fade-in-from-bottom-8">
            Innovations & <span className="text-emerald-500">R&D</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in" style={{ animationDelay: "0.2s" }}>
            Pioneering the future with groundbreaking research and development.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="flex items-center justify-center">
            <button
              onClick={goToPrevious}
              className="absolute left-0 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-500 hover:shadow-xl transition-all duration-200 transform hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="overflow-hidden w-full max-w-4xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 400}px)` }}
              >
                {innovations.map((innovation, index) => (
                  <div key={index} className="px-2">
                    <InnovationCard innovation={innovation} isActive={index === currentIndex} index={index} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={goToNext}
              className="absolute right-0 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-500 hover:shadow-xl transition-all duration-200 transform hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {innovations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-emerald-500 scale-125" : "bg-gray-300 hover:bg-emerald-500/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InnovationsCarousel
