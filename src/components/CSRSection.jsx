"use client"

import { useState, useEffect } from "react"
import { Leaf, HandHeart, Users, Recycle } from "lucide-react"

const CSRActivityCard = ({ activity, index }) => {
  const icons = {
    environment: Leaf,
    community: HandHeart,
    volunteer: Users,
    sustainability: Recycle,
  }
  const Icon = icons[activity.type] || Leaf

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50/50 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 animate-in fade-in-from-bottom-8"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
        <Icon size={36} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
      <div className="text-emerald-500 font-semibold mt-4">{activity.stat}</div>
    </div>
  )
}

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [
    {
      quote: "Avexra's green initiatives have significantly reduced our community's carbon footprint. Truly inspiring!",
      author: "Jayanth Varathur",
      role: "Community Leader",
    },
    {
      quote: "Their commitment to education has transformed countless lives. We are grateful for their partnership.",
      author: "Dr. Rohan Patel", // Updated name
      role: "Non-profit Director",
    },
    {
      quote: "The volunteer hours from Avexra employees made a huge difference in our local clean-up project.",
      author: "Aravind Ramesh",
      role: "Environmental Activist",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div
      className="relative bg-gray-50 rounded-2xl p-8 shadow-xl border border-gray-50/50 animate-in fade-in"
      style={{ animationDelay: "0.6s" }}
    >
      <div className="relative h-48 flex items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute w-full text-center transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <blockquote className="text-gray-800 text-xl italic leading-relaxed mb-4">"{testimonial.quote}"</blockquote>
            <p className="font-semibold text-gray-900">{testimonial.author}</p>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-emerald-500 scale-125" : "bg-gray-400 hover:bg-emerald-500/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const CSRSection = () => {
  const activities = [
    {
      title: "Green Initiatives",
      description: "Reducing our carbon footprint through sustainable practices and renewable energy.",
      type: "environment",
      stat: "15% Carbon Reduction",
    },
    {
      title: "Community Projects",
      description: "Investing in local communities through education, infrastructure, and social programs.",
      type: "community",
      stat: "$2M Community Investment",
    },
    {
      title: "Employee Volunteering",
      description: "Our team dedicates thousands of hours to support causes they care about.",
      type: "volunteer",
      stat: "10,000+ Volunteer Hours",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-in fade-in-from-bottom-8">
            Corporate Social <span className="text-emerald-500">Responsibility</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in" style={{ animationDelay: "0.2s" }}>
            Committed to making a positive impact on the planet and in our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <CSRActivityCard key={index} activity={activity} index={index} />
          ))}
        </div>

        <TestimonialSlider />
      </div>
    </section>
  )
}

export default CSRSection
