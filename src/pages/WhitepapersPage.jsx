"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft, FileText, Download, BookOpen, ArrowRight } from "lucide-react"

const WhitepaperCard = ({ paper }) => (
  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50/50 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 group">
    <div className="w-full h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center shadow-md">
      <BookOpen size={64} className="text-emerald-500 opacity-70" />
    </div>
    <div className="flex items-center text-sm text-gray-500 mb-3">
      <FileText size={16} className="mr-2 text-emerald-500" />
      {paper.type}
      <Download size={16} className="ml-4 mr-2 text-emerald-500" />
      {paper.pages} pages
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-500 transition-colors duration-300">
      {paper.title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{paper.excerpt}</p>
    <button className="w-full bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center">
      <Download size={18} className="mr-2" />
      Download
    </button>
  </div>
)

const WhitepapersPage = () => {
  const navigate = useNavigate()

  const whitepapers = [
    {
      title: "The Definitive Guide to Enterprise AI Adoption",
      type: "Whitepaper",
      pages: 45,
      excerpt: "A comprehensive guide for businesses looking to integrate AI into their operations effectively.",
    },
    {
      title: "Securing Your Cloud: A Zero-Trust Approach",
      type: "Whitepaper",
      pages: 30,
      excerpt: "Learn about implementing a zero-trust security model for robust cloud protection.",
    },
    {
      title: "Digital Transformation in the Post-Pandemic Era",
      type: "Report",
      pages: 55,
      excerpt: "An in-depth analysis of how digital transformation strategies have evolved and what's next.",
    },
    {
      title: "Leveraging Quantum Computing for Business Advantage",
      type: "Research Paper",
      pages: 60,
      excerpt: "Explore the potential applications and benefits of quantum computing for various industries.",
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

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">Whitepapers & Reports</h1>
        <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
          Access our in-depth research, expert analyses, and thought leadership on key industry topics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {whitepapers.map((paper, index) => (
            <WhitepaperCard key={index} paper={paper} />
          ))}
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105">
            View All Resources
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhitepapersPage
