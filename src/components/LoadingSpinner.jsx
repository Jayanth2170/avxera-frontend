"use client"

const LoadingSpinner = ({ isVisible }) => {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl animate-pulse">
          <div className="w-8 h-8 bg-white rounded-lg animate-bounce"></div>
        </div>

        {/* Company Name */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Avexra</h1>

        {/* Premium Spinner */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 border-4 border-emerald-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin"></div>
          <div
            className="absolute inset-2 border-2 border-emerald-300 rounded-full border-b-transparent animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          ></div>
        </div>

        <p className="text-gray-600 mt-6 animate-pulse">Loading your dashboard...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
