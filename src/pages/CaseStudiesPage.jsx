"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft, Briefcase, TrendingUp, ArrowRight } from "lucide-react"

const CaseStudyCard = ({ study }) => (
  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50/50 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 group">
    <img
      src={study.image || "/placeholder.svg?height=200&width=300&query=business success story"}
      alt={study.title}
      className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
    />
    <div className="flex items-center text-sm text-gray-500 mb-3">
      <Briefcase size={16} className="mr-2 text-emerald-500" />
      {study.industry}
      <TrendingUp size={16} className="ml-4 mr-2 text-emerald-500" />
      {study.result}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-500 transition-colors duration-300">
      {study.title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{study.excerpt}</p>
    <div className="flex items-center text-emerald-500 font-semibold text-sm group-hover:text-emerald-600 transition-colors">
      Read Case Study
      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  </div>
)

const CaseStudiesPage = () => {
  const navigate = useNavigate()

  const caseStudies = [
    {
      title: "Global Retailer's Supply Chain Optimization",
      image: "/placeholder.svg?height=200&width=300",
      industry: "Retail",
      result: "25% Cost Reduction",
      excerpt:
        "Avexra implemented an AI-driven supply chain solution, leading to significant cost savings and efficiency gains for a major global retailer.",
    },
    {
      title: "Financial Institution's Cybersecurity Fortification",
      image: "/placeholder.svg?height=200&width=300",
      industry: "Finance",
      result: "99% Threat Mitigation",
      excerpt:
        "Our advanced cybersecurity framework protected a leading financial institution from sophisticated cyber attacks, ensuring data integrity and compliance.",
    },
    {
      title: "Healthcare Provider's Digital Patient Experience",
      image: "/placeholder.svg?height=200&width=300",
      industry: "Healthcare",
      result: "40% Patient Engagement Increase",
      excerpt:
        "Transformed patient interactions through a new digital platform, improving accessibility and satisfaction for a large healthcare network.",
    },
    {
      title: "Manufacturing Giant's IoT Integration",
      image: "/placeholder.svg?height=200&width=300",
      industry: "Manufacturing",
      result: "15% Production Efficiency",
      excerpt:
        "Integrated IoT solutions across manufacturing plants, providing real-time insights and boosting operational efficiency.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl shadow-emerald-500/10 animate-in fade-in zoom-in-90 duration-300 ease-out">
        <button
          onClick={() => navigate("/homepage")}
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Homepage
        </button>

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">Case Studies</h1>
        <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
          Discover how Avexra has helped leading organizations achieve their strategic goals and overcome complex
          challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} />
          ))}
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105">
            View All Case Studies
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesPage
