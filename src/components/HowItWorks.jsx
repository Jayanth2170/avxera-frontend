"use client"

import { Search, Users, Handshake } from "lucide-react"

const StepCard = ({ step, index }) => {
  return (
    <div className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2">
          <step.icon className="text-white" size={36} />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center font-bold text-emerald-600 text-sm shadow-lg">
          {step.number}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
        {step.title}
      </h3>

      <p className="text-gray-600 leading-relaxed max-w-sm mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
        {step.description}
      </p>
    </div>
  )
}

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Discover",
      description:
        "Browse through our curated selection of premium brands and service providers across all industries.",
      icon: Search,
    },
    {
      number: 2,
      title: "Connect",
      description: "Reach out to potential partners through our secure messaging system and schedule consultations.",
      icon: Users,
    },
    {
      number: 3,
      title: "Partner",
      description: "Establish successful partnerships and collaborations that drive growth for your business.",
      icon: Handshake,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="text-emerald-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy to find, connect, and partner with the right businesses for your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Connection Lines */}
        <div className="hidden md:block relative mt-16">
          <div className="absolute top-1/2 left-1/3 w-1/3 h-px bg-gradient-to-r from-emerald-300 to-emerald-500 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-1/3 w-1/3 h-px bg-gradient-to-r from-emerald-300 to-emerald-500 transform -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
