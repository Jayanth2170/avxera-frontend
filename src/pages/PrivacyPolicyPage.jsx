"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const PrivacyPolicyPage = () => {
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

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 text-lg mb-8">Last updated: November 25, 2024</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            At Avexra, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website [Your Website URL], including any other
            media form, media channel, mobile website, or mobile application related or connected thereto (collectively,
            the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy
            policy, please do not access the Site.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">1. Collection of Your Information</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site
            includes:
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Personal Data</h3>
          <p>
            Personally identifiable information, such as your name, shipping address, email address, and telephone
            number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily
            give to us when you register with the Site or when you choose to participate in various activities related
            to the Site, such as online chat and message boards.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Derivative Data</h3>
          <p>
            Information our servers automatically collect when you access the Site, such as your IP address, your
            browser type, your operating system, your access times, and the pages you have viewed directly before and
            after accessing the Site.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized
            experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Enable user-to-user communications.</li>
            <li>Generate a personal profile about you to make your visit to the Site more personalized.</li>
            <li>Increase the efficiency and operation of the Site.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li>Notify you of updates to the Site.</li>
            <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
          </ul>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">3. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be
            disclosed as follows:
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">By Law or to Protect Rights</h3>
          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate
            or remedy potential violations of our policies, or to protect the rights, property, or safety of others, we
            may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Third-Party Service Providers</h3>
          <p>
            We may share your information with third parties that perform services for us or on our behalf, including
            data analysis, email delivery, hosting services, customer service, and marketing assistance.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information.
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data
            transmission can be guaranteed against any interception or other type of misuse.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br />
            Avexra Inc.
            <br />
            123 Innovation Drive, Suite 400, Tech City, CA 90210, USA
            <br />
            Email: info@avexra.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
