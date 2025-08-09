"use client"

import { useState } from "react"
import { ArrowRight, Building2, Star } from "lucide-react"

const BrandCard = ({ brand, index }) => {
  return (
    <div
      className="flex-shrink-0 min-w-[280px] w-80 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
            <Building2 className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{brand.name}</h3>
            <p className="text-gray-600">{brand.industry}</p>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < brand.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">({brand.reviews} reviews)</span>
        </div>

        <p className="text-gray-700 mb-6 line-clamp-3">{brand.description}</p>

        <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-transform duration-200 transform hover:scale-105 flex items-center justify-center group">
          View Profile
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
        </button>
      </div>
    </div>
  )
}

const FeaturedBrands = () => {
  const brands = [
    {
      name: "TechFlow Solutions",
      industry: "Technology",
      rating: 5,
      reviews: 127,
      description:
        "Leading provider of enterprise software solutions with a focus on digital transformation and cloud infrastructure.",
      category: "technology",
    },
    {
      name: "Creative Studio Pro",
      industry: "Design & Marketing",
      rating: 5,
      reviews: 89,
      description:
        "Award-winning creative agency specializing in brand identity, digital marketing, and user experience design.",
      category: "design",
    },
    {
      name: "Global Logistics Hub",
      industry: "Supply Chain",
      rating: 4,
      reviews: 203,
      description: "International logistics and supply chain management company serving Fortune 500 clients worldwide.",
      category: "logistics",
    },
    {
      name: "FinTech Innovations",
      industry: "Financial Services",
      rating: 5,
      reviews: 156,
      description:
        "Cutting-edge financial technology solutions for modern banking, payments, and investment management.",
      category: "fintech",
    },
    {
      name: "EcoSustain Partners",
      industry: "Sustainability",
      rating: 4,
      reviews: 94,
      description:
        "Environmental consulting and sustainable business solutions for companies committed to green practices.",
      category: "sustainability",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4 sm:px-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-emerald-600">Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exceptional brands and service providers that are transforming industries worldwide.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide pl-4 sm:pl-0"
            tabIndex={0} // allows keyboard scrolling on focus
            aria-label="Featured brands"
          >
            {brands.map((brand, index) => (
              <BrandCard key={brand.name} brand={brand} index={index} />
            ))}
          </div>

          {/* Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-transform duration-200 transform hover:scale-105">
            View All Brands
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBrands
