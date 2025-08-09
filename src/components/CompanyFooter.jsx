"use client"

import { Link } from "react-router-dom"
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

const CompanyFooter = () => {
  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about-us" },
      { name: "Leadership", href: "/homepage#leadership" },
      { name: "Careers", href: "/careers-page" },
      { name: "News & Media", href: "/homepage#news-media" },
    ],
    Solutions: [
      { name: "Enterprise AI", href: "/solutions/enterprise-ai" },
      { name: "Cloud Services", href: "/solutions/cloud-services" },
      { name: "Cybersecurity", href: "/solutions/cybersecurity" },
      { name: "Digital Transformation", href: "/solutions/digital-transformation" },
    ],
    Resources: [
      { name: "Blog", href: "/blog-page" },
      { name: "Case Studies", href: "/case-studies-page" },
      { name: "Whitepapers", href: "/whitepapers-page" },
      { name: "Support Center", href: "/support-center" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "Compliance", href: "/compliance" },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/avexra" },
    { icon: Twitter, href: "https://twitter.com/avexra" },
    { icon: Facebook, href: "https://facebook.com/avexra" },
    { icon: Instagram, href: "https://instagram.com/avexra" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6 group">
              <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
                Avexra
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              Innovating Tomorrow, Today. Driving global progress through cutting-edge technology.
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-emerald-500 flex-shrink-0" />
                <span>info@avexra.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-emerald-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-3 text-emerald-500 flex-shrink-0" />
                <span>Tech City, CA, USA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="sm:col-span-1">
              <h3 className="text-emerald-500 text-lg font-semibold mb-5">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-emerald-500 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="text-gray-300 mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} Avexra. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-emerald-500 hover:text-white transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
                aria-label={`Avexra ${social.href.split('.')[1]} page`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default CompanyFooter
