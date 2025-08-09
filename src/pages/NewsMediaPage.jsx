"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react"

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50/50 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 group">
      <img
        src={news.image || "/placeholder.svg?height=200&width=300&query=news headline image"}
        alt={news.headline}
        className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
      />
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <Calendar size={16} className="mr-2 text-emerald-500" />
        {news.date}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-500 transition-colors duration-300">
        {news.headline}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{news.excerpt}</p>
      <div className="flex items-center text-emerald-500 font-semibold text-sm group-hover:text-emerald-600 transition-colors">
        Read More
        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  )
}

const NewsMediaPage = () => {
  const navigate = useNavigate()

  const newsItems = [
    {
      headline: "Avexra Unveils Next-Gen Quantum Computing Initiative",
      image: "/placeholder.svg?height=200&width=300",
      date: "Nov 20, 2024",
      excerpt:
        "Avexra today announced a major investment in quantum computing research, aiming to revolutionize data processing and AI capabilities.",
    },
    {
      headline: "CEO Dr. Anya Sharma Speaks at Global Tech Summit",
      image: "/placeholder.svg?height=200&width=300",
      date: "Nov 18, 2024",
      excerpt:
        "Dr. Sharma shared insights on the future of AI and sustainable technology, emphasizing Avexra's commitment to ethical innovation.",
    },
    {
      headline: "Avexra Partners with Leading University for AI Research",
      image: "/placeholder.svg?height=200&width=300",
      date: "Nov 15, 2024",
      excerpt:
        "A new collaboration will accelerate breakthroughs in machine learning algorithms and their real-world applications.",
    },
    {
      headline: "Avexra Recognized as Top Employer for Innovation",
      image: "/placeholder.svg?height=200&width=300",
      date: "Nov 12, 2024",
      excerpt:
        "Our commitment to fostering a creative and supportive work environment has earned us a prestigious industry award.",
    },
    {
      headline: "Expanding Global Presence: New Office in Singapore",
      image: "/placeholder.svg?height=200&width=300",
      date: "Nov 10, 2024",
      excerpt:
        "Avexra continues its global expansion with the opening of a new state-of-the-art office in Singapore, strengthening our APAC operations.",
    },
    {
      headline: "Sustainable Tech Solutions: Our Latest Initiative",
      image: "/placeholder.svg?height=200&width=300",
      date: "Nov 8, 2024",
      excerpt:
        "Learn about Avexra's new initiatives focused on developing eco-friendly technologies and reducing our environmental footprint.",
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

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">News & Media</h1>
        <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
          Stay updated with Avexra's latest announcements, insights, and industry recognition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105">
            Load More News
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsMediaPage
