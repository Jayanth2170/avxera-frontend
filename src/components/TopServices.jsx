"use client"

import { useState } from "react"
import { Palette, Code, TrendingUp, Megaphone, Shield, Globe, Zap, Users } from "lucide-react"

const ServiceCard = ({ service, index, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in ${
        isActive
          ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-white shadow-lg shadow-emerald-500/20"
          : "border-gray-200 bg-white hover:border-emerald-300 hover:shadow-lg"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg"
            : "bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-emerald-600"
        }`}
      >
        <service.icon
          className={`transition-colors duration-300 ${
            isActive ? "text-white" : "text-gray-600 group-hover:text-white"
          }`}
          size={28}
        />
      </div>

      <h3
        className={`text-xl font-bold mb-3 transition-colors ${
          isActive ? "text-emerald-600" : "text-gray-900 group-hover:text-emerald-600"
        }`}
      >
        {service.name}
      </h3>

      <p className="text-gray-600 leading-relaxed">{service.description}</p>

      <div className="mt-4 text-sm font-medium text-emerald-600">{service.providerCount}+ providers</div>
    </div>
  )
}

const TopServices = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      name: "Design & Creative",
      description: "Brand identity, UI/UX design, and creative marketing solutions from top-tier agencies.",
      icon: Palette,
      providerCount: 150,
    },
    {
      name: "Development",
      description: "Full-stack development, mobile apps, and enterprise software solutions.",
      icon: Code,
      providerCount: 200,
    },
    {
      name: "Marketing",
      description: "Digital marketing, SEO, content strategy, and growth hacking services.",
      icon: TrendingUp,
      providerCount: 180,
    },
    {
      name: "Advertising",
      description: "Performance marketing, brand campaigns, and media buying expertise.",
      icon: Megaphone,
      providerCount: 120,
    },
    {
      name: "Consulting",
      description: "Strategic consulting, business transformation, and operational excellence.",
      icon: Users,
      providerCount: 90,
    },
    {
      name: "Security",
      description: "Cybersecurity, compliance, and risk management solutions.",
      icon: Shield,
      providerCount: 75,
    },
    {
      name: "Global Services",
      description: "International expansion, localization, and cross-border solutions.",
      icon: Globe,
      providerCount: 110,
    },
    {
      name: "Innovation",
      description: "Emerging technologies, AI/ML, and digital transformation services.",
      icon: Zap,
      providerCount: 85,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of professional services across all major industries and specializations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
              isActive={activeService === index}
              onClick={() => setActiveService(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  )
}

export default TopServices
