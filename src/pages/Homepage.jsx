"use client"

import { useState, useEffect } from "react"
import PageLoadingSpinner from "../components/PageLoadingSpinner"
import CompanyNavbar from "../components/CompanyNavbar"
import CompanyHero from "../components/CompanyHero"
import CompanyOverviewStats from "../components/CompanyOverviewStats"
import LeadershipTeam from "../components/LeadershipTeam"
import FinancialHighlights from "../components/FinancialHighlights"
import GlobalPresence from "../components/GlobalPresence"
import InnovationsCarousel from "../components/InnovationsCarousel"
import CSRSection from "../components/CSRSection"
import CareersSection from "../components/CareersSection"
import NewsMedia from "../components/NewsMedia"
import PartnershipServiceCTA from "../components/PartnershipServiceCTA" // New import
import ContactSupport from "../components/ContactSupport"
import CompanyFooter from "../components/CompanyFooter"
import Chatbot from "../components/Chatbot"
import { ChatbotProvider } from "../context/ChatbotContext"

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // 2.5 seconds loading

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Custom styles for chatbot animations */}
      <style jsx>{`
      @keyframes bounce-dot {
        0%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-4px);
        }
      }
      .animate-bounce-dot {
        animation: bounce-dot 1.4s infinite ease-in-out both;
      }
      .animate-bounce-slow {
        animation: bounce 2s infinite;
      }
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #a7f3d0; /* emerald-200 */
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #34d399; /* emerald-500 */
      }
    `}</style>

      <PageLoadingSpinner isVisible={isLoading} />

      {!isLoading && (
        <ChatbotProvider>
          <div className="animate-in fade-in">
            <CompanyNavbar />
            <CompanyHero />
            <CompanyOverviewStats />
            <LeadershipTeam id="leadership" />
            <FinancialHighlights />
            <GlobalPresence />
            <InnovationsCarousel />
            <CSRSection />
            <CareersSection />
            <NewsMedia id="news-media" />
            <PartnershipServiceCTA /> {/* New component added here */}
            <ContactSupport />
            <CompanyFooter />
            <Chatbot />
          </div>
        </ChatbotProvider>
      )}
    </div>
  )
}

export default Homepage
