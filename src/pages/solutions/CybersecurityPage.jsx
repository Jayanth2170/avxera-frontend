"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft, Shield, Lock, Activity, AlertTriangle } from "lucide-react"

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon size={24} className="text-emerald-600" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
)

const CybersecurityPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-8">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl shadow-emerald-500/10 animate-in fade-in zoom-in-90 duration-300 ease-out">
        <button
          onClick={() => navigate("/homepage")}
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Homepage
        </button>

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">Cybersecurity Solutions</h1>
        <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
          Protect your digital assets with Avexra's comprehensive cybersecurity services, safeguarding your business
          from evolving threats.
        </p>

        <img
          src="/placeholder.svg?height=400&width=800"
          alt="Cybersecurity"
          className="w-full h-auto rounded-xl shadow-lg mb-12"
        />

        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Security Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <FeatureCard
            icon={Shield}
            title="Threat Detection & Response"
            description="Proactive monitoring and rapid response to identify and neutralize cyber threats."
          />
          <FeatureCard
            icon={Lock}
            title="Data Encryption & Privacy"
            description="Advanced encryption techniques to secure sensitive data at rest and in transit."
          />
          <FeatureCard
            icon={Activity}
            title="Vulnerability Management"
            description="Regular assessments and patching to identify and remediate system vulnerabilities."
          />
          <FeatureCard
            icon={AlertTriangle}
            title="Compliance & Risk Management"
            description="Ensure adherence to industry regulations and mitigate risks with expert guidance."
          />
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-full font-semibold text-xl shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105">
            Secure Your Business
            <svg
              className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
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

export default CybersecurityPage
