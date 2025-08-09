"use client"

import { Calendar, ArrowRight } from "lucide-react"

const NewsCard = ({ news, index }) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50/50 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 group animate-in fade-in-from-bottom-8"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
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

const NewsMedia = () => {
  const newsItems = [
    {
      headline: "Avexra Unveils Next-Gen Quantum Computing Initiative",
      image: "/images/a.png",
      date: "Nov 20, 2024",
      excerpt:
        "Avexra today announced a major investment in quantum computing research, aiming to revolutionize data processing and AI capabilities.",
    },
    {
      headline: "CEO Dr. Anya Sharma Speaks at Global Tech Summit",
      image: "/images/b.png",
      date: "Nov 18, 2024",
      excerpt:
        "Dr. Sharma shared insights on the future of AI and sustainable technology, emphasizing Avexra's commitment to ethical innovation.",
    },
    {
      headline: "Avexra Partners with Leading University for AI Research",
      image: "/images/c.png",
      date: "Nov 15, 2024",
      excerpt:
        "A new collaboration will accelerate breakthroughs in machine learning algorithms and their real-world applications.",
    },
    {
      headline: "Avexra Recognized as Top Employer for Innovation",
      image: "/images/d.png",
      date: "Nov 12, 2024",
      excerpt:
        "Our commitment to fostering a creative and supportive work environment has earned us a prestigious industry award.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-in fade-in-from-bottom-8">
            Latest News & <span className="text-emerald-500">Media</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in" style={{ animationDelay: "0.2s" }}>
            Stay updated with Avexra's latest announcements, insights, and industry recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {newsItems.map((news, index) => (
            <NewsCard key={index} news={news} index={index} />
          ))}
        </div>

        <div className="text-center animate-in fade-in" style={{ animationDelay: "0.8s" }}>
          <button className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105">
            View All News
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewsMedia
