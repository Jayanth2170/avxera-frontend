"use client"

import { Link } from "react-router-dom"
import { MessageSquare } from "lucide-react"
import { useChatbot } from "../context/ChatbotContext" // Import the hook

const CompanyNavbar = () => {
  const { toggleChatbot } = useChatbot() // Use the chatbot context

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Financials", href: "#financials" },
    { name: "Global Presence", href: "#global" },
    { name: "Innovations", href: "#innovations" },
    { name: "Careers", href: "#careers" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-gray-900 text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
              Avexra
            </span>
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-emerald-600 font-medium text-sm sm:text-lg transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Chatbot Button */}
          <button
            onClick={toggleChatbot}
            className="ml-4 inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-lg shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105"
            aria-label="Toggle chatbot"
          >
            <MessageSquare size={18} className="mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
            Chat with Us
          </button>
        </div>
      </div>
    </nav>
  )
}

export default CompanyNavbar
