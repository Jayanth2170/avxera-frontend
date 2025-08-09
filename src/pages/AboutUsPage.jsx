"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const AboutUsPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-8">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl shadow-emerald-500/10 animate-in fade-in zoom-in-90 duration-300 ease-out">
        <button
          onClick={() => navigate("/homepage")}
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Homepage
        </button>

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Avexra</h1>
        <p className="text-gray-600 text-lg mb-8">Innovating Tomorrow, Today.</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Avexra is a global technology leader committed to driving progress through cutting-edge innovation and
            unwavering excellence. Founded in [Year], we have grown into a powerhouse of technological advancement,
            serving diverse industries and clients worldwide. Our mission is to empower businesses and individuals with
            transformative solutions that redefine possibilities.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">Our Vision</h2>
          <p>
            To be the most trusted and impactful technology partner, creating a future where technology seamlessly
            enhances human potential and solves complex global challenges. We envision a world where innovation is
            accessible, sustainable, and beneficial for all.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Innovation:</strong> We constantly push boundaries, explore new frontiers, and embrace creative
              solutions.
            </li>
            <li>
              <strong>Excellence:</strong> We are committed to delivering superior quality in everything we do, from
              products to services.
            </li>
            <li>
              <strong>Integrity:</strong> We operate with transparency, honesty, and a strong ethical compass.
            </li>
            <li>
              <strong>Collaboration:</strong> We believe in the power of teamwork and foster an environment of mutual
              respect and shared success.
            </li>
            <li>
              <strong>Impact:</strong> We strive to make a meaningful positive difference for our clients, employees,
              and the global community.
            </li>
          </ul>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">Our Journey</h2>
          <p>
            From our humble beginnings, Avexra has embarked on an incredible journey of growth and discovery. We've
            faced challenges, celebrated triumphs, and continuously evolved to stay at the forefront of technological
            change. Our history is a testament to our resilience, adaptability, and relentless pursuit of innovation.
          </p>
          <p>
            Today, Avexra stands as a beacon of technological progress, with a diverse team of brilliant minds, a robust
            portfolio of groundbreaking products, and a global presence that spans continents. We are excited about what
            the future holds and remain dedicated to building a better tomorrow, today.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
