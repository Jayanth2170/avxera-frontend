"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const CompliancePage = () => {
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

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">Compliance</h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">Last updated: November 25, 2024</p>

        <article className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Avexra is committed to upholding the highest standards of compliance and regulatory adherence across all our
            operations. Our robust compliance framework ensures that we meet and exceed industry best practices and
            legal requirements globally.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-3">1. Our Commitment to Compliance</h2>
          <p>
            We believe that strong compliance is fundamental to building trust with our customers, partners, and
            stakeholders. Our commitment extends to data privacy, security, ethical conduct, and responsible business
            practices.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-3">2. Key Compliance Areas</h2>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-2">Data Privacy and Protection</h3>
          <p>
            We adhere strictly to global data protection regulations, including GDPR (General Data Protection
            Regulation) and CCPA (California Consumer Privacy Act). Our practices ensure the lawful, fair, and
            transparent processing of personal data.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-2">Information Security</h3>
          <p>
            Our information security management system is certified to ISO 27001 standards, demonstrating our commitment
            to protecting sensitive information and maintaining the confidentiality, integrity, and availability of our
            systems and data.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-2">Financial Regulations</h3>
          <p>
            Avexra complies with all relevant financial regulations and anti-money laundering (AML) laws to prevent
            financial crime and ensure transparency in our financial operations.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-2">Ethical Conduct and Anti-Corruption</h3>
          <p>
            We operate with the highest ethical standards. Our anti-corruption policies and training programs ensure
            that all employees and partners conduct business with integrity and in compliance with anti-bribery laws.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-3">3. Regulatory Oversight</h2>
          <p>
            Avexra is regularly audited by independent third-party organizations to ensure our compliance frameworks are
            robust and effective. We continuously monitor changes in regulatory landscapes to adapt our policies and
            procedures proactively.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-3">4. Contact Our Compliance Team</h2>
          <p>
            For any questions or concerns regarding our compliance practices, please contact our dedicated compliance
            team at:
            <br />
            Email: <a href="mailto:compliance@avexra.com" className="text-emerald-600 underline">compliance@avexra.com</a>
          </p>
        </article>
      </div>
    </div>
  )
}

export default CompliancePage
