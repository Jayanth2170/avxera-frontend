"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft, Mail, Linkedin, Twitter } from "lucide-react"

const LeaderCard = ({ leader }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50/50 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10">
      <img
        src={`/placeholder.svg?height=120&width=120&query=professional headshot of ${leader.name}`}
        alt={leader.name}
        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-emerald-500 shadow-lg"
      />
      <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
      <p className="text-emerald-600 font-semibold mb-3">{leader.designation}</p>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{leader.bio}</p>
      <div className="flex justify-center space-x-4">
        <a
          href={`mailto:${leader.email}`}
          className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
        >
          <Mail size={20} />
        </a>
        <a
          href={leader.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={leader.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
        >
          <Twitter size={20} />
        </a>
      </div>
    </div>
  )
}

const LeadershipTeamPage = () => {
  const navigate = useNavigate()

  const leaders = [
    {
      name: "Dr. Anya Sharma",
      designation: "Chief Executive Officer",
      email: "anya.sharma@avexra.com",
      linkedin: "https://linkedin.com/in/anyasharma",
      twitter: "https://twitter.com/anyasharma",
      bio: "Visionary leader driving Avexra's strategic direction and global expansion.",
    },
    {
      name: "Mark Thompson",
      designation: "Chief Technology Officer",
      email: "mark.thompson@avexra.com",
      linkedin: "https://linkedin.com/in/markthompson",
      twitter: "https://twitter.com/markthompson",
      bio: "Architect of Avexra's innovative tech stack and R&D initiatives.",
    },
    {
      name: "Sophia Lee",
      designation: "Chief Operating Officer",
      email: "sophia.lee@avexra.com",
      linkedin: "https://linkedin.com/in/sophialee",
      twitter: "https://twitter.com/sophialee",
      bio: "Ensuring operational excellence and seamless execution across all departments.",
    },
    {
      name: "David Kim",
      designation: "Chief Financial Officer",
      email: "david.kim@avexra.com",
      linkedin: "https://linkedin.com/in/davidkim",
      twitter: "https://twitter.com/davidkim",
      bio: "Overseeing financial strategy and sustainable growth for Avexra.",
    },
    {
      name: "Elena Petrova",
      designation: "VP, Global Sales",
      email: "elena.petrova@avexra.com",
      linkedin: "https://linkedin.com/in/elenapetrova",
      twitter: "https://twitter.com/elenapetrova",
      bio: "Leading our global sales initiatives and client acquisition strategies.",
    },
    {
      name: "Carlos Ramirez",
      designation: "VP, Product Development",
      email: "carlos.ramirez@avexra.com",
      linkedin: "https://linkedin.com/in/carlosramirez",
      twitter: "https://twitter.com/carlosramirez",
      bio: "Driving the development of next-generation products and solutions.",
    },
    {
      name: "Jessica White",
      designation: "Head of Human Resources",
      email: "jessica.white@avexra.com",
      linkedin: "https://linkedin.com/in/jessicawhite",
      twitter: "https://twitter.com/jessicawhite",
      bio: "Fostering a culture of innovation, diversity, and employee well-being.",
    },
    {
      name: "Omar Hassan",
      designation: "Director of Marketing",
      email: "omar.hassan@avexra.com",
      linkedin: "https://linkedin.com/in/omarhassan",
      twitter: "https://twitter.com/omarhassan",
      bio: "Shaping Avexra's brand narrative and market presence globally.",
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

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">Our Leadership Team</h1>
        <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
          Meet the visionary leaders guiding Avexra towards a brighter future. Their expertise and dedication drive our
          innovation and success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <LeaderCard key={index} leader={leader} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeadershipTeamPage
