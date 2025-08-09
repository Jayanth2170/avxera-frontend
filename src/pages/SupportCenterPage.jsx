"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft, HelpCircle, Mail, Phone, Search, ArrowRight } from "lucide-react"

const SupportCard = ({ icon: Icon, title, description, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50/50 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 group"
  >
    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
      <Icon size={32} className="text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </button>
)

const SupportCenterPage = () => {
  const navigate = useNavigate()

  const handleContactClick = (type) => {
    alert(`Simulating ${type} contact. Feature coming soon!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:py-16 sm:px-8">
      <div className="max-w-lg sm:max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-8 md:p-12 shadow-2xl shadow-emerald-500/10 animate-in fade-in zoom-in-90 duration-300 ease-out">
        <button
          onClick={() => navigate("/homepage")}
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-6 sm:mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Homepage
        </button>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 text-center">
          Support Center
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 text-center max-w-xl sm:max-w-3xl mx-auto">
          How can we help you today? Find answers, contact support, or explore our resources.
        </p>

        <div className="relative max-w-lg sm:max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for articles, FAQs, or solutions..."
            className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <SupportCard
            icon={HelpCircle}
            title="Knowledge Base"
            description="Find answers to common questions and detailed guides."
            onClick={() => handleContactClick("Knowledge Base")}
          />
          <SupportCard
            icon={Mail}
            title="Email Support"
            description="Send us a message and we'll get back to you."
            onClick={() => handleContactClick("Email Support")}
          />
          <SupportCard
            icon={Phone}
            title="Call Support"
            description="Speak directly with our support team."
            onClick={() => handleContactClick("Call Support")}
          />
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105">
            Visit Our Community Forum
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SupportCenterPage
