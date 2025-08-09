"use client"

import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { ArrowLeft, Mail, User, Building2, MessageSquare, Send, ArrowRight } from "lucide-react"

const RequestFormPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const initialType = queryParams.get("type") || "general"

  const [formData, setFormData] = useState({
    requestType: initialType,
    fullName: "",
    email: "",
    companyName: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setFormData((prev) => ({ ...prev, requestType: initialType }))
  }, [initialType])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)
    setIsSubmitted(true)
    // Simulate API call
    setTimeout(() => {
      // Optionally navigate back or clear form
      // navigate('/homepage');
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div
        className="relative bg-white/95 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-2xl shadow-emerald-500/10 w-full max-w-3xl mx-auto animate-in fade-in zoom-in-90 duration-300 ease-out"
        role="main"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate("/homepage")}
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Homepage
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          {formData.requestType === "partnership" ? "Partnership Application" : "Service Inquiry"}
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Tell us more about your needs and how we can assist you.
        </p>

        {isSubmitted ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
              <Send size={48} className="text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted Successfully!</h2>
            <p className="text-gray-600 text-lg">
              Thank you for your interest. We have received your request and will get back to you shortly.
            </p>
            <button
              onClick={() => navigate("/homepage")}
              className="mt-8 group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105"
            >
              Return to Homepage
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Request Type */}
            <div className="relative md:col-span-2">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MessageSquare size={20} className="text-gray-400" />
              </div>
              <select
                name="requestType"
                value={formData.requestType}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="general" disabled>
                  Select Request Type
                </option>
                <option value="partnership">Partnership Request</option>
                <option value="service">Service Inquiry</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Full Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail size={20} className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
              />
            </div>

            {/* Company Name */}
            <div className="relative md:col-span-2">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Building2 size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name (Optional)"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
              />
            </div>

            {/* Message */}
            <div className="relative md:col-span-2">
              <div className="absolute top-4 left-0 pl-4 flex items-center pointer-events-none">
                <MessageSquare size={20} className="text-gray-400" />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 resize-y"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="md:col-span-2 w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 mt-6"
            >
              Send Request
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default RequestFormPage
