"use client"

import { createContext, useContext, useState, useCallback } from "react"

const ChatbotContext = createContext(null)

export const ChatbotProvider = ({ children }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  const toggleChatbot = useCallback(() => {
    setIsChatbotOpen((prev) => !prev)
  }, [])

  const closeChatbot = useCallback(() => {
    setIsChatbotOpen(false)
  }, [])

  return (
    <ChatbotContext.Provider value={{ isChatbotOpen, toggleChatbot, closeChatbot }}>{children}</ChatbotContext.Provider>
  )
}

export const useChatbot = () => {
  const context = useContext(ChatbotContext)
  if (!context) {
    throw new Error("useChatbot must be used within a ChatbotProvider")
  }
  return context
}
