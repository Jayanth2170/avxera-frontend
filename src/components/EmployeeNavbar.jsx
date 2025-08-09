"use client"

import { Bell, Settings, ChevronDown } from "lucide-react"

const EmployeeNavbar = () => {
  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110">
              <div className="w-4 h-4 bg-white rounded-md"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-emerald-600 transition-colors duration-300">
              Avexra
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200 group">
              <Bell size={20} className="group-hover:animate-bounce" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            </button>

            {/* Settings */}
            <button className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200 group">
              <Settings size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  Sarah Johnson
                </p>
                <p className="text-xs text-gray-500">Senior Developer</p>
              </div>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110">
                  SJ
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <ChevronDown size={16} className="text-gray-400 group-hover:text-emerald-600 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default EmployeeNavbar
