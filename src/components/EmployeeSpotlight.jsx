"use client"

import { useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-500 transform ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-0 absolute"
      }`}
    >
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {testimonial.initials}
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
            <Quote size={12} className="text-white" />
          </div>
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
          <p className="text-emerald-600 font-medium">{testimonial.position}</p>
          <p className="text-gray-500 text-sm">{testimonial.department}</p>
        </div>
      </div>

      <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6">"{testimonial.quote}"</blockquote>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full mr-1 ${i < testimonial.rating ? "bg-emerald-500" : "bg-gray-300"}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">Team Rating</span>
        </div>
        <div className="text-emerald-600 font-semibold text-sm">{testimonial.date}</div>
      </div>
    </div>
  )
}

const EmployeeSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sundar Pichai",
      position: "CEO, Google",
      department: "Product Development",
      initials: "SP",
      quote:
        "Sarah's technical expertise and collaborative spirit have been instrumental in our team's success. Her ability to solve complex problems while mentoring junior developers is truly remarkable.",
      rating: 5,
      date: "Oct 2024",
    },
    {
      name: "Bill Gates",
      position: "Co-founder, Microsoft",
      department: "Design Team",
      initials: "BG",
      quote:
        "Working with Sarah on the mobile app redesign was fantastic. Her attention to detail and user-centric approach helped us create an exceptional user experience that exceeded client expectations.",
      rating: 5,
      date: "Sep 2024",
    },
    {
      name: "Satya Nadella",
      position: "CEO, Microsoft",
      department: "Technology",
      initials: "SN",
      quote:
        "Sarah consistently delivers high-quality code and innovative solutions. Her leadership during the system migration project was exemplary, ensuring zero downtime and improved performance.",
      rating: 5,
      date: "Aug 2024",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Employee Spotlight</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What your colleagues are saying about your contributions and teamwork
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonials Container */}
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} isActive={index === currentIndex} />
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-emerald-500 scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-emerald-300 hover:scale-110"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmployeeSpotlight
