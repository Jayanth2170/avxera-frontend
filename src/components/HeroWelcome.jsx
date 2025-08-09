"use client"

import { useState, useEffect } from "react"

const TypingAnimation = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay + currentIndex * 100)

      return () => clearTimeout(timer)
    } else {
      // Stop blinking cursor after 1s
      const cursorTimer = setTimeout(() => setShowCursor(false), 1000)
      return () => clearTimeout(cursorTimer)
    }
  }, [currentIndex, text, delay])

  return (
    <span aria-live="polite" className="select-none">
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  )
}

const HeroWelcome = () => {
  // For live date/time update every minute:
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-emerald-50/50 via-white to-gray-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 sm:top-20 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-16 right-8 sm:bottom-20 sm:right-20 w-48 sm:w-80 h-48 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Animated Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight sm:leading-tight">
          <TypingAnimation text="Welcome back, Sarah!" delay={500} />
        </h1>

        {/* Subtitle with Fade In */}
        <div
          className="animate-fade-in"
          style={{ animationDelay: "3s", animationFillMode: "both" }}
        >
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Ready to make today amazing? Your dashboard is updated with the latest insights and achievements.
          </p>

          {/* Current Date/Time */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl shadow-lg">
            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            <span className="text-gray-700 font-medium text-sm sm:text-base">
              {now.toLocaleDateString("en-US", {
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
