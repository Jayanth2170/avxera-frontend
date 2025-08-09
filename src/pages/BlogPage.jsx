"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, Tag, ArrowRight } from "lucide-react"

const BlogPostCard = ({ post }) => (
  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50/50 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 group">
    <img
      src={post.image || "/placeholder.svg?height=200&width=300&query=blog post image"}
      alt={post.title}
      className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
    />
    <div className="flex items-center text-sm text-gray-500 mb-3">
      <Calendar size={16} className="mr-2 text-emerald-500" />
      {post.date}
      <Tag size={16} className="ml-4 mr-2 text-emerald-500" />
      {post.category}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-500 transition-colors duration-300">
      {post.title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
    <div className="flex items-center text-emerald-500 font-semibold text-sm group-hover:text-emerald-600 transition-colors">
      Read More
      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  </div>
)

const BlogPage = () => {
  const navigate = useNavigate()

  const blogPosts = [
    {
      title: "The Future of AI in Enterprise: Trends to Watch",
      image: "/placeholder.svg?height=200&width=300",
      date: "Nov 22, 2024",
      category: "AI",
      excerpt: "Explore the latest trends and predictions for artificial intelligence in the business world.",
    },
    {
      title: "Cloud Security Best Practices for 2025",
      image: "/placeholder.svg?height=200&width=300",
      date: "Nov 19, 2024",
      category: "Cybersecurity",
      excerpt: "A comprehensive guide to securing your cloud infrastructure against modern threats.",
    },
    {
      title: "Digital Transformation: A Roadmap for Success",
      image: "/placeholder.svg?height=200&width=300",
      date: "Nov 15, 2024",
      category: "Strategy",
      excerpt: "Key steps and considerations for a successful digital transformation journey.",
    },
    {
      title: "Innovating with Quantum Computing: Avexra's Vision",
      image: "/placeholder.svg?height=200&width=300",
      date: "Nov 10, 2024",
      category: "Innovation",
      excerpt: "Our insights into how quantum computing will revolutionize industries and technology.",
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

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">Avexra Blog</h1>
        <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
          Stay informed with our latest insights, industry trends, and expert opinions on technology and business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105">
            View All Posts
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
