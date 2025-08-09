"use client"

import { useState, useEffect } from "react"
import { PlayCircle } from "lucide-react"

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else {
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false)
      }, 500)
      return () => clearTimeout(cursorTimeout)
    }
  }, [index, text, speed])

  return (
    <span className="relative">
      {displayedText}
      {showCursor && (
        <span className="absolute right-0 top-0 bottom-0 w-1 bg-emerald-500 animate-pulse"></span>
      )}
    </span>
  )
}

const CompanyHero = () => {
  const [showUnavailableMessage, setShowUnavailableMessage] = useState(false)

  const handleWatchVideoClick = () => {
    setShowUnavailableMessage(true)
    setTimeout(() => {
      setShowUnavailableMessage(false)
    }, 3000)
  }

  return (
    <section className="relative h-[80vh] min-h-[400px] bg-gradient-to-br from-white to-gray-50 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-emerald-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-44 sm:w-72 h-44 sm:h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Animated Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 animate-in fade-in-from-bottom-8">
          <TypingEffect text="Innovating Tomorrow, Today" />
        </h1>

        {/* Subheading */}
        <p
          className="font-serif text-gray-600 text-base sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto animate-in fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          Driving global progress through cutting-edge technology and unwavering commitment to excellence.
        </p>

        {/* Call to Action */}
        <button
          onClick={handleWatchVideoClick}
          className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-xl shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105"
        >
          <PlayCircle size={24} className="mr-3 group-hover:scale-110 transition-transform" />
          Watch Intro Video
        </button>

        {showUnavailableMessage && (
          <div className="mt-6 text-center text-sm sm:text-lg text-gray-700 font-medium animate-in fade-in-from-bottom-4 duration-300 max-w-md mx-auto">
            Unavailable, will be available soon.
          </div>
        )}
      </div>
    </section>
  )
}

export default CompanyHero
