"use client"

import { useState, useEffect, useRef } from "react"
import { X, User, Calendar, Ruler, Briefcase, DollarSign } from "lucide-react"

const JobApplicationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    experience: "",
    previousSalary: "",
  })
  const formRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // Focus on the first input when the modal opens for accessibility
      const firstInput = formRef.current?.querySelector("input, select, textarea")
      if (firstInput) {
        firstInput.focus()
      }
    }
  }, [isOpen])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Application Submitted:", formData)
    // Simulate a brief processing time
    setTimeout(() => {
      onClose() // Close the form after submission
      setFormData({
        // Reset form data
        name: "",
        age: "",
        gender: "",
        experience: "",
        previousSalary: "",
      })
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center animate-in fade-in duration-300">
      <div
        ref={formRef}
        className="relative bg-white/95 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-2xl shadow-emerald-500/10 w-full max-w-md mx-4 animate-in zoom-in-90 duration-300 ease-out"
        role="dialog"
        aria-modal="true"
        aria-labelledby="application-form-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors"
          aria-label="Close application form"
        >
          <X size={20} />
        </button>

        <h2 id="application-form-title" className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Join Our Team
        </h2>
        <p className="text-gray-600 text-center mb-8">Fill out your details to apply for a position.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
            />
          </div>

          {/* Age */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Calendar size={20} className="text-gray-400" />
            </div>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
              required
              min="18"
              max="99"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
            />
          </div>

          {/* Gender */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Ruler size={20} className="text-gray-400" />
            </div>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Experience (Optional) */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Briefcase size={20} className="text-gray-400" />
            </div>
            <input
              type="number"
              name="experience"
              placeholder="Years of Experience (Optional)"
              value={formData.experience}
              onChange={handleInputChange}
              min="0"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
            />
          </div>

          {/* Previous Salary (Optional) */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <DollarSign size={20} className="text-gray-400" />
            </div>
            <input
              type="number"
              name="previousSalary"
              placeholder="Previous Salary (Optional)"
              value={formData.previousSalary}
              onChange={handleInputChange}
              min="0"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}

export default JobApplicationForm
