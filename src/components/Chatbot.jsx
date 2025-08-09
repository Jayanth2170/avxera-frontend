"use client"

import { useState, useEffect, useRef } from "react"
import { X, BotIcon as Robot, Send } from "lucide-react"
import { useChatbot } from "../context/ChatbotContext"

// Define the static Q&A content
const qaContent = [
  {
    id: "about",
    question: "About Company",
    answer:
      "We are a cutting-edge tech company focused on delivering innovative solutions with a strong emphasis on UI/UX and seamless user experience.",
  },
  {
    id: "requirement",
    question: "Requirement",
    answer:
      "We seek talented developers passionate about frontend and backend technologies, with a keen eye for design and detail.",
  },
  {
    id: "vacancy",
    question: "Vacancy",
    answer: "Currently, we have openings for Frontend Developer, Backend Developer, and UI/UX Designer roles.",
  },
  {
    id: "skills",
    question: "Skills",
    answer:
      "Proficiency in React, Node.js, Tailwind CSS, and experience with animation libraries like Framer Motion or GSAP is preferred.",
  },
  {
    id: "pay",
    question: "Pay",
    answer:
      "We offer competitive salaries aligned with industry standards, along with performance bonuses and benefits.",
  },
]

// Message component for chat bubbles
const Message = ({ type, content }) => {
  const isUser = type === "user"
  return (
    <div
      className={`flex items-start ${isUser ? "justify-end" : "justify-start"} mb-4 animate-in fade-in duration-300`}
    >
      {!isUser && (
        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mr-3 shadow-md">
          <Robot size={18} />
        </div>
      )}
      <div
        className={`max-w-[80%] p-3 rounded-xl shadow-sm ${
          isUser
            ? "bg-emerald-500 text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-tl-none border border-gray-200"
        }`}
      >
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

const Chatbot = () => {
  const { isChatbotOpen, closeChatbot } = useChatbot()
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [inputValue, setInputValue] = useState("") // State for the input field
  const messagesEndRef = useRef(null)
  const initialWelcomeMessage = "Hello! I'm your friendly Avexra Help Bot. How can I assist you today?"

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Initial welcome message when chatbot opens
  useEffect(() => {
    if (isChatbotOpen && messages.length === 0) {
      setIsTyping(true)
      const timer = setTimeout(() => {
        setMessages([{ type: "assistant", content: initialWelcomeMessage }])
        setIsTyping(false)
      }, 500) // Simulate bot thinking
      return () => clearTimeout(timer)
    } else if (!isChatbotOpen) {
      // Reset messages when chatbot closes
      setMessages([])
      setIsTyping(false)
      setInputValue("") // Clear input on close
    }
  }, [isChatbotOpen])

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleQuestionClick = (questionId) => {
    const selectedQ = qaContent.find((q) => q.id === questionId)
    if (!selectedQ) return

    // Add user's question to messages
    setMessages((prev) => [...prev, { type: "user", content: selectedQ.question }])
    setIsTyping(true)

    // Simulate bot typing and then add answer
    const timer = setTimeout(() => {
      setMessages((prev) => [...prev, { type: "assistant", content: selectedQ.answer }])
      setIsTyping(false)
    }, 1000) // Simulate bot typing delay

    return () => clearTimeout(timer)
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user's typed message
    setMessages((prev) => [...prev, { type: "user", content: inputValue.trim() }])
    setInputValue("") // Clear input immediately
    setIsTyping(true)

    // Simulate bot typing and then respond with "Feature unavailable"
    const timer = setTimeout(() => {
      setMessages((prev) => [...prev, { type: "assistant", content: "Feature unavailable now." }])
      setIsTyping(false)
    }, 1000)

    return () => clearTimeout(timer)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault() // Prevent new line
      handleSendMessage()
    }
  }

  return (
    <>
      {isChatbotOpen && (
        <div className="fixed inset-0 bg-black/20 z-[99] flex justify-end animate-in fade-in duration-300">
          <div
            className="relative w-full md:w-96 h-full bg-white/95 backdrop-blur-lg rounded-l-2xl shadow-2xl shadow-emerald-500/10 flex flex-col animate-in slide-in-from-right-full duration-300 ease-out"
            role="dialog"
            aria-modal="true"
            aria-label="Avexra Help Bot"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-emerald-100 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-tl-2xl">
              <div className="flex items-center">
                <Robot size={28} className="mr-3 animate-bounce-slow" />
                <h2 className="text-xl font-bold">Help Bot</h2>
              </div>
              <button
                onClick={closeChatbot}
                className="p-2 rounded-full hover:bg-emerald-700 transition-colors"
                aria-label="Close chatbot"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
              {messages.map((msg, index) => (
                <Message key={index} type={msg.type} content={msg.content} />
              ))}
              {isTyping && (
                <div className="flex items-start justify-start mb-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mr-3 shadow-md">
                    <Robot size={18} />
                  </div>
                  <div className="max-w-[80%] p-3 rounded-xl bg-gray-100 text-gray-800 rounded-tl-none border border-gray-200">
                    <div className="flex space-x-1">
                      <span
                        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce-dot"
                        style={{ animationDelay: "0s" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce-dot"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce-dot"
                        style={{ animationDelay: "0.4s" }}
                      ></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} /> {/* Scroll anchor */}
            </div>

            {/* Quick Action Buttons / Simulated Input */}
            <div className="p-6 border-t border-gray-100 bg-white">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {qaContent.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionClick(q.id)}
                    className="p-2 text-xs bg-emerald-50/50 border border-emerald-200 rounded-full text-emerald-700 font-medium hover:bg-emerald-100 transition-colors duration-200 shadow-sm"
                    disabled={isTyping}
                  >
                    {q.question}
                  </button>
                ))}
              </div>
              <div className="relative flex items-center">
                <textarea
                  className="flex-1 p-3 pr-10 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 resize-none outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-200"
                  placeholder="Type your message..."
                  rows="1"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isTyping} // Disable input while bot is typing
                ></textarea>
                <button
                  onClick={handleSendMessage}
                  className="absolute right-3 p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors disabled:opacity-50"
                  disabled={isTyping || inputValue.trim() === ""} // Disable send button if typing or input is empty
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
