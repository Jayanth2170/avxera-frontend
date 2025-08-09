"use client"
import { Lightbulb, Users, Heart, BookOpen } from "lucide-react"
import { Link } from "react-router-dom" // Import Link

const ValueCard = ({ value, index }) => {
  const icons = {
    Innovation: Lightbulb,
    "Diversity & Inclusion": Users,
    Wellness: Heart,
    "Continuous Learning": BookOpen,
  }
  const Icon = icons[value.title] || Lightbulb

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50/50 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 animate-in fade-in-from-bottom-8"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
    </div>
  )
}

const CareersSection = () => {
  // Removed isFormOpen state as it's no longer a modal

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

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-in fade-in-from-bottom-8">
            Careers at <span className="text-emerald-500">Avexra</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in" style={{ animationDelay: "0.2s" }}>
            Join a team that's shaping the future of technology and making a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>

        <div className="text-center animate-in fade-in" style={{ animationDelay: "0.8s" }}>
          <Link
            to="/apply" // Link to the new application page
            className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-full font-semibold text-xl shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105"
          >
            Join Our Team
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
    </section>
  )
}

export default CareersSection
