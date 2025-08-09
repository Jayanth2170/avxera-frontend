"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Trophy, Target, Zap, Users } from "lucide-react"

const AchievementCard = ({ achievement, isActive }) => {
  const icons = {
    trophy: Trophy,
    target: Target,
    zap: Zap,
    users: Users,
  }

  const Icon = icons[achievement.icon]

  return (
    <div
      className={`flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 transform ${
        isActive ? "scale-105 shadow-2xl shadow-emerald-500/20" : "scale-95 opacity-70"
      }`}
      style={{ minWidth: "280px", maxWidth: "320px", width: "80vw" /* responsive width */ }}
    >
      <div className="flex items-center mb-4">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            isActive ? "bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg" : "bg-emerald-100"
          }`}
        >
          <Icon size={24} className={isActive ? "text-white" : "text-emerald-600"} />
        </div>
        <div className="ml-4">
          <div className="text-sm text-emerald-600 font-medium">{achievement.date}</div>
          <div className="text-xs text-gray-500">{achievement.category}</div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
          <span className="text-xs text-gray-500">Milestone Achieved</span>
        </div>
        <div className="text-emerald-600 font-semibold text-sm">{achievement.points} pts</div>
      </div>
    </div>
  )
}

const AchievementsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [cardWidth, setCardWidth] = useState(320) // default width for desktop
  const containerRef = useRef(null)

  const achievements = [
    {
      icon: "trophy",
      title: "Project Excellence Award",
      description:
        "Recognized for outstanding performance in the Q3 mobile app development project with exceptional code quality and user experience.",
      date: "Oct 2024",
      category: "Performance",
      points: 500,
    },
    {
      icon: "target",
      title: "Goal Crusher",
      description:
        "Successfully completed 100% of quarterly objectives ahead of schedule while maintaining high quality standards.",
      date: "Sep 2024",
      category: "Achievement",
      points: 300,
    },
    {
      icon: "users",
      title: "Team Leadership",
      description:
        "Led a cross-functional team of 8 developers to deliver a critical client project 2 weeks ahead of deadline.",
      date: "Aug 2024",
      category: "Leadership",
      points: 400,
    },
    {
      icon: "zap",
      title: "Innovation Champion",
      description:
        "Implemented automated testing framework that reduced deployment time by 60% and improved code reliability.",
      date: "Jul 2024",
      category: "Innovation",
      points: 350,
    },
  ]

  // Dynamically update card width on resize
  useEffect(() => {
    function updateCardWidth() {
      if (containerRef.current) {
        // Get the width of the first card (or approximate width)
        const card = containerRef.current.querySelector("div > div")
        if (card) {
          const width = card.getBoundingClientRect().width
          setCardWidth(width)
        }
      }
    }

    updateCardWidth()
    window.addEventListener("resize", updateCardWidth)
    return () => window.removeEventListener("resize", updateCardWidth)
  }, [])

  // Auto play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, achievements.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % achievements.length)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating your milestones and recognizing exceptional contributions
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          <div className="flex items-center justify-center relative">
            {/* Prev button */}
            <button
              aria-label="Previous achievement"
              onClick={goToPrevious}
              className="absolute left-0 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-xl transition-all duration-200 transform hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Carousel viewport */}
            <div className="overflow-hidden w-full max-w-4xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
              >
                {achievements.map((achievement, index) => (
                  <div key={index} className="px-2 flex-shrink-0" style={{ width: cardWidth }}>
                    <AchievementCard achievement={achievement} isActive={index === currentIndex} />
                  </div>
                ))}
              </div>
            </div>

            {/* Next button */}
            <button
              aria-label="Next achievement"
              onClick={goToNext}
              className="absolute right-0 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-xl transition-all duration-200 transform hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-emerald-500 scale-125" : "bg-gray-300 hover:bg-emerald-300"
                }`}
                aria-label={`Go to achievement ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsCarousel
