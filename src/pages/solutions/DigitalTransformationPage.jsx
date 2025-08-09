"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft, Zap, Lightbulb, Users, TrendingUp } from "lucide-react"

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon size={24} className="text-emerald-600" />
    </div>
    <div>
      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  </div>
)

const DigitalTransformationPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-emerald-500/10 animate-in fade-in zoom-in-90 duration-300 ease-out">
        <button
          onClick={() => navigate("/homepage")}
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-6 sm:mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Homepage
        </button>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 text-center">
          Digital Transformation
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          Transform your business for the digital age with Avexra's strategic consulting and implementation services.
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Our Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <FeatureCard
            icon={Zap}
            title="Agile Methodology"
            description="Rapid iteration and flexible development to adapt to changing market demands."
          />
          <FeatureCard
            icon={Lightbulb}
            title="Innovation Strategy"
            description="Develop a roadmap for adopting emerging technologies and fostering a culture of innovation."
          />
          <FeatureCard
            icon={Users}
            title="Workforce Enablement"
            description="Empower your employees with the skills and tools needed for digital success."
          />
          <FeatureCard
            icon={TrendingUp}
            title="Performance Optimization"
            description="Streamline operations, reduce costs, and enhance customer experiences through digital solutions."
          />
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-lg sm:text-xl shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105">
            Start Your Transformation
            <svg
              className="ml-3 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DigitalTransformationPage
