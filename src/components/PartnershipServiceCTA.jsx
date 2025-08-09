"use client"

import { Link } from "react-router-dom"
import { Handshake, Cloud, ArrowRight } from "lucide-react"

const CTACard = ({ icon: Icon, title, description, linkTo, linkText, delay }) => {
  return (
    <Link
      to={linkTo}
      className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-50/50 text-center flex flex-col items-center justify-center
        transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 animate-in fade-in-from-bottom-8"
      style={{ animationDelay: delay }}
    >
      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
        <Icon size={36} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed mb-6">{description}</p>
      <div className="flex items-center text-emerald-600 font-semibold text-lg group-hover:text-emerald-700 transition-colors">
        {linkText}
        <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}

const PartnershipServiceCTA = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-in fade-in-from-bottom-8">
            Ready to <span className="text-emerald-500">Connect</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in" style={{ animationDelay: "0.2s" }}>
            Whether you're looking to partner with us or inquire about our world-class services, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CTACard
            icon={Handshake}
            title="Apply for Partnership"
            description="Explore collaboration opportunities and grow your business with Avexra."
            linkTo="/request-form?type=partnership"
            linkText="Start Partnership Application"
            delay="0.4s"
          />
          <CTACard
            icon={Cloud}
            title="Inquire about Services"
            description="Discover how our cutting-edge solutions can transform your operations."
            linkTo="/request-form?type=service"
            linkText="Request Service Information"
            delay="0.6s"
          />
        </div>
      </div>
    </section>
  )
}

export default PartnershipServiceCTA
