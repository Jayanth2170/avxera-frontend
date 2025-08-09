"use client"

import { Home, Users, Settings, HelpCircle, Twitter, Linkedin, Github, Mail } from "lucide-react"

const EmployeeFooter = () => {
  const quickLinks = [
    { name: "Dashboard", icon: Home, href: "/" },
    { name: "Team", icon: Users, href: "/team" },
    { name: "Settings", icon: Settings, href: "/settings" },
    { name: "Help", icon: HelpCircle, href: "/help" },
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "Email", icon: Mail, href: "mailto:support@avexra.com" },
  ]

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Quick Links */}
          <div className="flex items-center space-x-8 mb-6 md:mb-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">Avexra</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200 group"
                >
                  <link.icon size={16} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">© 2024 Avexra Employee Portal. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <a href="/privacy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </a>
            <a href="/support" className="hover:text-emerald-400 transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default EmployeeFooter
