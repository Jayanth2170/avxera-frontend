"use client"

import { useState, useEffect, useRef } from "react"
import { TrendingUp, DollarSign, Percent, BarChart2, Target } from "lucide-react"

const AnimatedProgressBar = ({ value, max = 100, colorClass, delay = 0 }) => {
  const [progress, setProgress] = useState(0)
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
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(value)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [value, delay, inView])

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 sm:h-3 overflow-hidden" ref={ref}>
      <div
        className={`h-full ${colorClass} rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${(progress / max) * 100}%` }}
      ></div>
    </div>
  )
}

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
    const increment = end / (duration / 16) // 16ms per frame
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
    <span ref={ref} aria-live="polite" aria-atomic="true">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const FinancialHighlights = () => {
  const [view, setView] = useState("yearly") // 'yearly' or 'quarterly'

  const data = {
    yearly: {
      grossRevenue: 1200, // in millions
      netProfitMargin: 18, // percent
      marketShare: 12, // percent
      yoyGrowth: 25, // percent
      investmentFunding: 500, // in millions
    },
    quarterly: {
      grossRevenue: 300,
      netProfitMargin: 17,
      marketShare: 11,
      yoyGrowth: 5,
      investmentFunding: 100,
    },
  }

  const currentData = data[view]

  return (
    <section id="financials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-2 sm:px-0">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 animate-in fade-in-from-bottom-8">
            Financial <span className="text-emerald-500">Highlights</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in" style={{ animationDelay: "0.2s" }}>
            A strong foundation for sustainable growth and market leadership.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12 animate-in fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative bg-gray-200 rounded-full p-1 flex select-none">
            <button
              onClick={() => setView("yearly")}
              className={`relative z-10 px-5 sm:px-6 py-2 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 ${
                view === "yearly" ? "text-white" : "text-gray-700 hover:text-emerald-600"
              }`}
              aria-pressed={view === "yearly"}
            >
              Yearly
            </button>
            <button
              onClick={() => setView("quarterly")}
              className={`relative z-10 px-5 sm:px-6 py-2 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 ${
                view === "quarterly" ? "text-white" : "text-gray-700 hover:text-emerald-600"
              }`}
              aria-pressed={view === "quarterly"}
            >
              Quarterly
            </button>
            <div
              className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-md transition-all duration-300 ${
                view === "yearly" ? "left-1" : "left-1/2"
              }`}
              aria-hidden="true"
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gross Revenue */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-50/50 animate-in fade-in-from-bottom-8"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center justify-between mb-6">
              <DollarSign size={32} className="text-emerald-500" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Gross Revenue</h3>
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              $<AnimatedCounter end={currentData.grossRevenue} suffix="M" delay={100} />
            </div>
            <AnimatedProgressBar
              value={(currentData.grossRevenue / 12) * 100}
              max={100}
              colorClass="bg-emerald-500"
              delay={100}
            />
            <p className="text-gray-600 text-sm mt-3">Target: $1.5B</p>
          </div>

          {/* Net Profit Margin */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-50/50 animate-in fade-in-from-bottom-8"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="flex items-center justify-between mb-6">
              <Percent size={32} className="text-emerald-500" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Net Profit Margin</h3>
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              <AnimatedCounter end={currentData.netProfitMargin} suffix="%" delay={200} />
            </div>
            <AnimatedProgressBar value={currentData.netProfitMargin} max={25} colorClass="bg-emerald-600" delay={200} />
            <p className="text-gray-600 text-sm mt-3">Industry Average: 15%</p>
          </div>

          {/* Market Share */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-50/50 animate-in fade-in-from-bottom-8"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center justify-between mb-6">
              <BarChart2 size={32} className="text-emerald-500" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Market Share</h3>
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              <AnimatedCounter end={currentData.marketShare} suffix="%" delay={300} />
            </div>
            <AnimatedProgressBar value={currentData.marketShare} max={20} colorClass="bg-emerald-500" delay={300} />
            <p className="text-gray-600 text-sm mt-3">Goal: 15%</p>
          </div>

          {/* Year-over-Year Growth */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-50/50 animate-in fade-in-from-bottom-8"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="flex items-center justify-between mb-6">
              <TrendingUp size={32} className="text-emerald-500" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">YOY Growth</h3>
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 flex items-center">
              <AnimatedCounter end={currentData.yoyGrowth} suffix="%" delay={400} />
              <TrendingUp size={32} className="ml-3 text-emerald-500 animate-pulse" />
            </div>
            <AnimatedProgressBar value={currentData.yoyGrowth} max={30} colorClass="bg-emerald-500" delay={400} />
            <p className="text-gray-600 text-sm mt-3">Exceeding expectations</p>
          </div>

          {/* Investment Funding */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-50/50 animate-in fade-in-from-bottom-8"
            style={{ animationDelay: "1.0s" }}
          >
            <div className="flex items-center justify-between mb-6">
              <Target size={32} className="text-emerald-500" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Funding Received</h3>
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              $<AnimatedCounter end={currentData.investmentFunding} suffix="M" delay={500} />
            </div>
            <AnimatedProgressBar
              value={(currentData.investmentFunding / 5) * 100}
              max={100}
              colorClass="bg-emerald-500"
              delay={500}
            />
            <p className="text-gray-600 text-sm mt-3">Series C Round</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinancialHighlights
