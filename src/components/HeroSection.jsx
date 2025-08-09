"use client"

import { useState } from "react"
import { Search, ArrowRight, Sparkles, Building2, Zap } from "lucide-react"

const FloatingBrand = ({ icon: Icon, delay = 0, className = "" }) => {
  return (
    <div
      className={`absolute ${className} opacity-20 animate-float`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "6s",
      }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
        <Icon size={24} className="text-emerald-600" />
      </div>
    </div>
  )
}

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement search action here or navigate
    alert(`Searching for: ${searchQuery}`)
  }

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 flex items-center justify-center overflow-hidden">
      {/* Floating Brand Elements */}
      <FloatingBrand icon={Building2} delay={0} className="top-20 left-20" />
      <FloatingBrand icon={Sparkles} delay={1} className="top-32 right-32" />
      <FloatingBrand icon={Zap} delay={2} className="bottom-32 left-32" />
      <FloatingBrand icon={Building2} delay={3} className="bottom-20 right-20" />

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Discover, Connect &
            <span className="block bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent mt-2">
              Partner with Leading Brands
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            The premier platform connecting innovative businesses with world-class service providers and strategic
            partners.
          </p>
        </div>

        {/* Hero Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
          role="search"
          aria-label="Search brands, services, or partnerships"
        >
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-emerald-300">
              <div className="flex items-center p-4">
                <Search
                  className="text-gray-400 mr-4 group-focus-within:text-emerald-500 transition-colors"
                  size={24}
                />
                <input
                  type="search"
                  placeholder="Search for brands, services, or partnerships..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg text-gray-900 placeholder-gray-500 outline-none bg-transparent"
                  aria-label="Search input"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="ml-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <button className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center">
            Showcase Your Brand
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="group bg-white border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center">
            Find Services
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-gray-500 text-sm font-medium mb-6">Trusted by industry leaders</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">500+</div>
              <div className="text-sm text-gray-400">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">50K+</div>
              <div className="text-sm text-gray-400">Connections</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
