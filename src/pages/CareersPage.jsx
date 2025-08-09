"use client"

import { useNavigate, Link } from "react-router-dom"
import { ArrowLeft, Lightbulb, Users, Heart, BookOpen } from "lucide-react"

const ValueCard = ({ value }) => {
  const icons = {
    Innovation: Lightbulb,
    "Diversity & Inclusion": Users,
    Wellness: Heart,
    "Continuous Learning": BookOpen,
  }
  const Icon = icons[value.title] || Lightbulb

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50/50 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10">
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
    </div>
  )
}

const CareersPage = () => {
  const navigate = useNavigate()

  const values = [
    {
      title: "Innovation",
      description: "We foster a culture where new ideas are celebrated and bold thinking is encouraged.",
    },
    {
      title: "Diversity & Inclusion",
      description: "A workplace where every voice is heard, valued, and contributes to our collective success.",
    },
    {
      title: "Wellness",
      description: "Prioritizing the holistic well-being of our employees through comprehensive support programs.",
    },
    {
      title: "Continuous Learning",
      description: "Empowering growth through ongoing development, mentorship, and skill enhancement.",
    },
  ]

  const jobOpenings = [
    { title: "Senior Software Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Product Manager", department: "Product", location: "New York, USA", type: "Full-time" },
    { title: "UX/UI Designer", department: "Design", location: "London, UK", type: "Full-time" },
    { title: "Data Scientist", department: "AI & Analytics", location: "Tokyo, Japan", type: "Full-time" },
    { title: "Marketing Specialist", department: "Marketing", location: "Sydney, Australia", type: "Full-time" },
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

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">Careers at Avexra</h1>
        <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
          Join a team that's shaping the future of technology and making a real impact. Discover your next opportunity
          with us.
        </p>

        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} />
          ))}
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Current Openings</h2>
        <div className="space-y-6 mb-12">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:border-emerald-300 transition-all duration-200"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-600 text-sm">
                  {job.department} &bull; {job.location} &bull; {job.type}
                </p>
              </div>
              <Link
                to="/apply"
                className="mt-4 md:mt-0 bg-emerald-500 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-600 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/apply"
            className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-full font-semibold text-xl shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105"
          >
            View All Openings
            <svg
              className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CareersPage
