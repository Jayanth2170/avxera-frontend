"use client"

import { useState } from "react"
import { FolderCheck, GraduationCap, Star, Award } from "lucide-react"

const StatCard = ({ icon: Icon, title, value, subtitle, delay, isRating = false }) => {
  const [isHovered, setIsHovered] = useState(false)

  const renderStars = () => {
    if (!isRating) return null

    return (
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`transition-all duration-300 ${
              i < value ? "text-yellow-400 fill-current transform scale-110" : "text-gray-300"
            }`}
            style={{
              transitionDelay: isHovered ? `${i * 100}ms` : "0ms",
            }}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">{value}.0/5.0</span>
      </div>
    )
  }

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group animate-fade-in"
      style={{ animationDelay: delay, animationFillMode: "both" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isHovered ? "bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg" : "bg-emerald-100"
          }`}
        >
          <Icon
            size={24}
            className={`transition-all duration-300 ${isHovered ? "text-white scale-110" : "text-emerald-600"}`}
          />
        </div>
        <div className={`text-right transition-all duration-300 ${isHovered ? "transform -translate-y-1" : ""}`}>
          <div
            className={`text-3xl font-bold transition-colors duration-300 ${
              isHovered ? "text-emerald-600" : "text-gray-900"
            }`}
          >
            {isRating ? "" : value}
          </div>
          {isRating && renderStars()}
        </div>
      </div>

      <h3
        className={`font-semibold text-lg mb-1 transition-colors duration-300 ${
          isHovered ? "text-emerald-600" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{subtitle}</p>

      {/* Hover Effect Line */}
      <div
        className={`h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mt-4 transition-all duration-300 ${
          isHovered ? "w-full" : "w-0"
        }`}
      ></div>
    </div>
  )
}

const StatsCards = () => {
  const stats = [
    {
      icon: FolderCheck,
      title: "Projects Completed",
      value: "24",
      subtitle: "This quarter",
      delay: "0.2s",
    },
    {
      icon: GraduationCap,
      title: "Trainings Attended",
      value: "12",
      subtitle: "Professional development",
      delay: "0.4s",
    },
    {
      icon: Star,
      title: "Employee Rating",
      value: 5,
      subtitle: "Peer reviews",
      delay: "0.6s",
      isRating: true,
    },
    {
      icon: Award,
      title: "Awards Won",
      value: "3",
      subtitle: "Recognition achievements",
      delay: "0.8s",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Performance Overview</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track your progress and achievements across key performance indicators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsCards
