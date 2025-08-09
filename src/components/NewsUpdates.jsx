"use client"

import { Calendar, ArrowRight, Users, Briefcase, Award } from "lucide-react"

const NewsCard = ({ news, index }) => {
  const icons = {
    team: Users,
    company: Briefcase,
    achievement: Award,
  }

  const Icon = icons[news.category] || Briefcase

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 group animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "both" }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-emerald-600 transition-all duration-300">
          <Icon size={20} className="text-emerald-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <div className="ml-3">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={14} className="mr-1" />
            {news.date}
          </div>
          <div className="text-xs text-emerald-600 font-medium uppercase tracking-wide">{news.category}</div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
        {news.title}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{news.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm text-gray-500">{news.readTime} min read</span>
        </div>

        <div className="flex items-center text-emerald-600 font-medium text-sm group-hover:text-emerald-700 transition-colors">
          Read More
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Hover Effect Line */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mt-4 transition-all duration-300 w-0 group-hover:w-full"></div>
    </div>
  )
}

const NewsUpdates = () => {
  const news = [
    {
      title: "New Employee Wellness Program Launch",
      description:
        "We're excited to announce our comprehensive wellness program featuring mental health support, fitness memberships, and flexible work arrangements to support work-life balance.",
      date: "Nov 15, 2024",
      category: "company",
      readTime: 3,
    },
    {
      title: "Q4 Team Building Retreat Announced",
      description:
        "Join us for our annual team retreat in the mountains! Three days of team building activities, workshops, and relaxation to strengthen our bonds and plan for the upcoming year.",
      date: "Nov 12, 2024",
      category: "team",
      readTime: 2,
    },
    {
      title: "Company Wins Industry Excellence Award",
      description:
        "Avexra has been recognized as the 'Best Workplace Innovation' by the Tech Industry Association for our outstanding employee development programs and inclusive culture.",
      date: "Nov 10, 2024",
      category: "achievement",
      readTime: 4,
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about company announcements, team updates, and exciting developments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <NewsCard key={index} news={item} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25">
            View All Updates
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewsUpdates
