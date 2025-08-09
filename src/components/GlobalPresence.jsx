"use client"

import { useState } from "react"
import { MapPin, Phone } from "lucide-react"

const GlobalPresence = () => {
  const officeLocations = [
    {
      lat: 40.7128,
      lng: -74.006,
      name: "New York Office",
      address: "123 Wall St, New York, USA",
      phone: "+1 212-555-1234",
      image: "/images/usa.png",
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      name: "London Office",
      address: "456 Oxford St, London, UK",
      phone: "+44 20-7946-0123",
      image: "/images/uk.png",
    },
    {
      lat: 35.6895,
      lng: 139.6917,
      name: "Tokyo Office",
      address: "789 Shibuya, Tokyo, Japan",
      phone: "+81 3-1234-5678",
      image: "/images/japan.png",
    },
    {
      lat: -33.8688,
      lng: 151.2093,
      name: "Sydney Office",
      address: "101 George St, Sydney, Australia",
      phone: "+61 2-9876-5432",
      image: "/images/australia.png",
    },
    {
      lat: 25.276987,
      lng: 55.296249,
      name: "Dubai Office",
      address: "Burj Khalifa, Dubai, UAE",
      phone: "+971 4-123-4567",
      image: "/images/dubai.png",
    },
  ]

  const [hoveredOfficeName, setHoveredOfficeName] = useState(null)

  return (
    <section id="global" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-in fade-in-from-bottom-8">
            Global <span className="text-emerald-500">Presence</span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Connecting the world through innovation, with offices in key global hubs.
          </p>
        </div>

        {/* Interactive World Map */}
        <div
          className="relative w-full h-[500px] bg-white rounded-2xl shadow-xl border border-gray-50/50 overflow-hidden mb-16 animate-in fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <img
            src="/images/map.png"
            alt="World Map"
            className="w-full h-full object-cover"
          />

          {officeLocations.map((office, index) => (
            <div
              key={index}
              className="absolute w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer animate-pulse"
              style={{
                left: `${((office.lng + 180) / 360) * 100}%`,
                top: `${((90 - office.lat) / 180) * 100}%`,
                transform: "translate(-50%, -50%)",
                animationDelay: `${index * 0.2}s`,
              }}
              onMouseEnter={() => setHoveredOfficeName(office.name)}
              onMouseLeave={() => setHoveredOfficeName(null)}
            >
              <MapPin size={16} className="text-white" />
              {hoveredOfficeName === office.name && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 p-4 bg-white rounded-lg shadow-xl border border-gray-50 z-20 w-64 animate-in fade-in">
                  <h4 className="font-semibold text-emerald-600 mb-2">{office.name}</h4>

                  {office.image && (
                    <img
                      src={office.image}
                      alt={office.name}
                      className="mb-2 w-full h-32 object-cover rounded"
                      loading="lazy"
                    />
                  )}

                  <p className="text-sm text-gray-700 flex items-center mb-1">
                    <MapPin size={14} className="mr-2 text-emerald-500" />
                    {office.address}
                  </p>
                  <p className="text-sm text-gray-700 flex items-center">
                    <Phone size={14} className="mr-2 text-emerald-500" />
                    {office.phone}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence
