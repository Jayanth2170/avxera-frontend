"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const CookiePolicyPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-emerald-500/10 animate-in fade-in zoom-in-90 duration-300 ease-out">
        <button
          onClick={() => navigate("/homepage")}
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-6 sm:mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Homepage
        </button>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">Cookie Policy</h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">Last updated: November 25, 2024</p>

        <article className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            This Cookie Policy explains what cookies are, how Avexra uses them, how third-parties we may partner with
            may use cookies on the Service, your choices regarding cookies and further information about cookies.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-3">1. What are cookies?</h2>
          <p>
            Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in
            your web browser and allows the Service or a third-party to recognize you and make your next visit easier
            and the Service more useful to you.
          </p>
          <p>
            Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or
            mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-3">2. How Avexra uses cookies</h2>
          <p>
            When you use and access the Service, we may place a number of cookies in your web browser. We use cookies
            for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>To enable certain functions of the Service</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>To enable advertisements delivery, including behavioral advertising</li>
          </ul>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-3">3. Third-party cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of
            the Service, deliver advertisements on and through the Service, and so on.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-3">4. What are your choices regarding cookies?</h2>
          <p>
            If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the
            help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them,
            you might not be able to use all of the features we offer, you may not be able to store your preferences,
            and some of our pages might not display properly.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-3">5. More information about cookies</h2>
          <p>
            You can learn more about cookies and the following third-party websites:
            <br />
            AllAboutCookies:{" "}
            <a
              href="http://www.allaboutcookies.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              http://www.allaboutcookies.org/
            </a>
            <br />
            Network Advertising Initiative:{" "}
            <a
              href="http://www.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              http://www.networkadvertising.org/
            </a>
          </p>
        </article>
      </div>
    </div>
  )
}

export default CookiePolicyPage
