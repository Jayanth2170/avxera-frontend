"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Mail, Lock, Eye, EyeOff, Building2, User } from "lucide-react"

const FloatingLine = ({ delay = 0, className = "" }) => (
  <div
    className={`absolute ${className} opacity-20`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-px h-32 bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-pulse"></div>
  </div>
)

const GlowOrb = ({ delay = 0, size = "w-64 h-64", className = "" }) => (
  <div
    className={`absolute ${size} ${className} animate-pulse opacity-10`}
    style={{ animationDelay: `${delay}s`, animationDuration: "4s" }}
  >
    <div className="w-full h-full bg-gradient-radial from-emerald-400/30 via-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
  </div>
)

const FormInput = ({ icon: Icon, type = "text", placeholder, value, onChange, name, required = false }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const inputType = type === "password" && showPassword ? "text" : type

  return (
    <div className="relative">
      <div
        className={`relative bg-white border-2 rounded-lg transition-all duration-200 ${
          isFocused ? "border-emerald-500 shadow-lg shadow-emerald-500/20" : "border-gray-200 hover:border-gray-300"
        }`}
      >
        <div className="flex items-center px-4 py-3">
          <Icon className={`mr-3 transition-colors ${isFocused ? "text-emerald-500" : "text-gray-400"}`} size={20} />
          <input
            type={inputType}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            className="flex-1 bg-transparent text-gray-900 placeholder-gray-500 outline-none text-base font-medium"
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-emerald-500 transition-colors ml-2"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

const FormSelect = ({ value, onChange, options, placeholder, name, required = false }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative">
      <div
        className={`relative bg-white border-2 rounded-lg transition-all duration-200 ${
          isFocused ? "border-emerald-500 shadow-lg shadow-emerald-500/20" : "border-gray-200 hover:border-gray-300"
        }`}
      >
        <div className="flex items-center px-4 py-3">
          <User className={`mr-3 transition-colors ${isFocused ? "text-emerald-500" : "text-gray-400"}`} size={20} />
          <select
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            className="flex-1 bg-transparent text-gray-900 outline-none text-base font-medium appearance-none cursor-pointer"
          >
            <option value="" className="text-gray-500">
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value} className="text-gray-900">
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none ml-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

const PrimaryButton = ({ children, type = "button", onClick, disabled = false, className = "" }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg
      transition-all duration-200 transform hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-emerald-500/25
      hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${className}`}
  >
    {children}
  </button>
)

const SocialButton = ({ icon: Icon, children, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center w-full bg-white border-2 border-emerald-500 text-emerald-600 font-medium py-3 px-4 rounded-lg
      transition-all duration-200 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/20"
  >
    <Icon size={20} className="mr-2" />
    {children}
  </button>
)

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  })
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage("")

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")
    const userFound = storedUsers.find(
      (user) => user.email === formData.email && user.password === formData.password
    )

    if (userFound) {
      console.log("Login successful:", formData)
      navigate("/homepage")
    } else {
      setErrorMessage("Invalid credentials. Please check your email and password.")
    }
  }

  const handleGoogleLogin = () => {
    console.log("Simulating Google login...")
    navigate("/homepage")
  }

  const userTypeOptions = [
    { value: "business", label: "Business" },
    { value: "customer", label: "Customer" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col lg:flex-row">
      {/* Left Side - Hero Section */}
      <div className="w-full lg:w-1/2 py-12 lg:py-0 relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
        {/* Background Effects */}
        <GlowOrb delay={0} size="w-96 h-96" className="top-10 -left-20" />
        <GlowOrb delay={2} size="w-80 h-80" className="bottom-10 -right-20" />
        <GlowOrb delay={4} size="w-64 h-64" className="top-1/2 left-1/4" />

        {/* Floating Lines */}
        <FloatingLine delay={0} className="top-20 left-1/4 rotate-12" />
        <FloatingLine delay={1} className="top-1/3 right-1/3 -rotate-12" />
        <FloatingLine delay={2} className="bottom-1/4 left-1/3 rotate-45" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col justify-center items-start w-full px-6 sm:px-12 md:px-16 py-12">
          <div className="max-w-lg">
            {/* Company Logo */}
            <div className="flex items-center mb-8 sm:mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <Building2 className="text-white" size={24} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Avexra</h1>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Welcome back to your
                <span className="block text-emerald-600 mt-2">enterprise platform</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                Access your dashboard and manage your business operations with enterprise-grade security and
                performance.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 sm:mt-12 flex flex-wrap sm:flex-nowrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-md">
          {/* Glassmorphism Card */}
          <div className="bg-white/85 backdrop-blur-[20px] border border-emerald-200/50 rounded-2xl p-8 sm:p-10 shadow-2xl shadow-emerald-500/10">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Sign in to your account</h3>
              <p className="text-gray-600 font-light">Enter your credentials to access your dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <FormInput
                icon={Mail}
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <FormInput
                icon={Lock}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />

              <FormSelect
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                options={userTypeOptions}
                placeholder="Sign in as"
                required
              />

              {errorMessage && <p className="text-red-500 text-sm text-center animate-in fade-in">{errorMessage}</p>}

              <PrimaryButton type="submit" className="mt-6 sm:mt-8">
                Sign In
              </PrimaryButton>
            </form>

            <div className="text-center mt-5 sm:mt-6">
              <button className="text-gray-500 hover:text-emerald-600 transition-colors text-sm font-medium hover:underline">
                Forgot your password?
              </button>
            </div>

            <div className="mt-6 sm:mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                <SocialButton icon={Building2} onClick={handleGoogleLogin}>
                  Google
                </SocialButton>
                <SocialButton icon={Building2}>LinkedIn</SocialButton>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <Link
                to="/signup"
                className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
