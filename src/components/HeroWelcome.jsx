"use client"

import { useState, useEffect } from "react"

const TypingAnimation = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }
      },
      delay + currentIndex * 100,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const HeroWelcome = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-50/50 via-white to-gray-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Animated Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <TypingAnimation text="Welcome back, Sarah!" delay={500} />
        </h1>

        {/* Subtitle with Fade In */}
        <div className="animate-fade-in" style={{ animationDelay: "3s", animationFillMode: "both" }}>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to make today amazing? Your dashboard is updated with the latest insights and achievements.
          </p>

          {/* Current Date/Time */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl shadow-lg">
            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroWelcome
