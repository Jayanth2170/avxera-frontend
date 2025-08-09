"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft, Cloud, Server, Database, ShieldCheck } from "lucide-react"

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

const CloudServicesPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-emerald-500/10 animate-in fade-in zoom-in-90 duration-300 ease-out">
        <button
          onClick={() => navigate("/homepage")}
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-6 sm:mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Homepage
        </button>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 text-center">Cloud Services</h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          Experience unparalleled scalability, reliability, and security with Avexra's comprehensive cloud solutions.
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <FeatureCard
            icon={Cloud}
            title="Infrastructure as a Service (IaaS)"
            description="Flexible and scalable computing resources, storage, and networking on demand."
          />
          <FeatureCard
            icon={Server}
            title="Platform as a Service (PaaS)"
            description="Develop, run, and manage applications without the complexity of building and maintaining the infrastructure."
          />
          <FeatureCard
            icon={Database}
            title="Database as a Service (DBaaS)"
            description="Managed database solutions for various data types, ensuring high availability and performance."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Cloud Security & Compliance"
            description="Robust security measures and compliance frameworks to protect your data in the cloud."
          />
        </div>
      </div>
    </div>
  )
}

export default CloudServicesPage
