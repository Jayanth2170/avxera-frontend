"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Send } from "lucide-react"
import { useState } from "react"

const ContactSupport = () => {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log("Newsletter subscribed:", email)
    setEmail("")
  }

  const socialIcons = [
    { icon: Linkedin, href: "https://linkedin.com/company/avexra" },
    { icon: Twitter, href: "https://twitter.com/avexra" },
    { icon: Facebook, href: "https://facebook.com/avexra" },
    { icon: Instagram, href: "https://instagram.com/avexra" },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 px-4 sm:px-0">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 animate-in fade-in-from-bottom-8">
            Contact & <span className="text-emerald-500">Support</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in" style={{ animationDelay: "0.2s" }}>
            We're here to help. Reach out to us for any inquiries or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-50/50 animate-in fade-in-from-bottom-8"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6 mb-8 text-base sm:text-lg text-gray-600">
              <div className="flex items-center">
                <MapPin size={24} className="mr-4 text-emerald-500 flex-shrink-0" />
                <span>123 Innovation Drive, Suite 400, Tech City, CA 90210, USA</span>
              </div>
              <div className="flex items-center">
                <Mail size={24} className="mr-4 text-emerald-500 flex-shrink-0" />
                <a href="mailto:info@avexra.com" className="hover:text-emerald-500 transition-colors truncate">
                  info@avexra.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={24} className="mr-4 text-emerald-500 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-emerald-500 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-50/50 animate-in fade-in-from-bottom-8"
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Stay Connected</h3>

            {/* Social Media */}
            <div className="mb-10">
              <p className="text-gray-600 text-lg mb-4">Follow us on social media:</p>
              <div className="flex space-x-4 sm:space-x-6">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gray-200 text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:bg-emerald-500"
                    aria-label={`Follow us on ${social.href.split(".")[1]}`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Form */}
            <div>
              <p className="text-gray-600 text-lg mb-4">Subscribe to our newsletter for updates:</p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-3 rounded-full border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 animate-in fade-in"
                />
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center animate-in fade-in"
                >
                  Subscribe
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSupport
