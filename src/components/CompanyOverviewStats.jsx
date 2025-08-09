"use client"

import { useState, useEffect, useRef } from "react"
import { Users, Briefcase, DollarSign, Globe, Star, Award } from "lucide-react"

const AnimatedCounter = ({ end, duration = 2000, delay = 0, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!inView) return

    const start = 0
    const increment = end / (duration / 16) // ~60fps
    let current = start

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment
        if (current < end) {
          setCount(Math.ceil(current))
        } else {
          setCount(end)
          clearInterval(interval)
        }
      }, 16)
    }, delay)

    return () => clearTimeout(timer)
  }, [end, duration, delay, inView])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const StatCard = ({ icon: Icon, title, value, suffix = "", prefix = "", delay = 0, isMap = false }) => {
  const [showMapTooltip, setShowMapTooltip] = useState(false)

  return (
    <div
      className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-50/50 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 animate-in fade-in-from-bottom-8"
      style={{ animationDelay: delay }}
      onMouseEnter={() => isMap && setShowMapTooltip(true)}
      onMouseLeave={() => isMap && setShowMapTooltip(false)}
    >
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300">
          <Icon size={28} className="text-white" />
        </div>
        <div className="text-right">
          <div className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-none">
            {isMap ? (
              value
            ) : (
              <AnimatedCounter
                end={value}
                delay={Number.parseFloat(delay) * 1000 + 500}
                prefix={prefix}
                suffix={suffix}
              />
            )}
          </div>
        </div>
      </div>

      <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 sm:mb-2">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm">Global impact, local presence.</p>

      {isMap && showMapTooltip && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 p-4 bg-white rounded-lg shadow-xl border border-gray-50 z-20 w-56 sm:w-64 animate-in fade-in">
          <h4 className="font-semibold text-emerald-600 mb-2">Our Offices:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>New York, USA</li>
            <li>London, UK</li>
            <li>Tokyo, Japan</li>
            <li>Sydney, Australia</li>
            <li>Dubai, UAE</li>
          </ul>
          <img
            src="/placeholder.svg?height=100&width=200"
            alt="World Map"
            className="mt-3 rounded-md w-full object-contain"
          />
        </div>
      )}
    </div>
  )
}

const CompanyOverviewStats = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 animate-in fade-in-from-bottom-8">
            Our <span className="text-emerald-500">Impact</span>
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Driving innovation and delivering excellence across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <StatCard icon={Users} title="Total Employees" value={5000} suffix="+" delay="0.3" />
          <StatCard icon={Briefcase} title="Years of Experience" value={25} suffix="+" delay="0.4" />
          <StatCard icon={DollarSign} title="Annual Revenue" value={12000000} prefix="$" delay="0.5" />
          <StatCard icon={Globe} title="Global Offices" value={5} delay="0.6" isMap={true} />
          <StatCard icon={Star} title="Customer Satisfaction" value={98} suffix="%" delay="0.7" />
          <StatCard icon={Award} title="Industry Awards Won" value={45} suffix="+" delay="0.8" />
        </div>
      </div>
    </section>
  )
}

export default CompanyOverviewStats
