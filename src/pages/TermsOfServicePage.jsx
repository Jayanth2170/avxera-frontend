"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const TermsOfServicePage = () => {
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

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-600 text-lg mb-8">Last updated: November 25, 2024</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Welcome to Avexra! These Terms of Service ("Terms") govern your use of our website, products, and services
            (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If
            you do not agree to these Terms, please do not use our Services.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
          <p>
            By creating an account, accessing, or using the Services, you acknowledge that you have read, understood,
            and agree to be bound by these Terms, as well as our Privacy Policy. We reserve the right to update or
            modify these Terms at any time without prior notice. Your continued use of the Services after any such
            changes constitutes your acceptance of the new Terms.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">2. User Accounts</h2>
          <p>
            To access certain features of the Services, you may be required to create an account. You agree to provide
            accurate, current, and complete information during the registration process and to update such information
            to keep it accurate, current, and complete. You are responsible for safeguarding your password and for any
            activities or actions under your account.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">3. Use of Services</h2>
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Use the Services for any illegal or unauthorized purpose.</li>
            <li>Violate any applicable laws or regulations.</li>
            <li>Interfere with or disrupt the integrity or performance of the Services.</li>
            <li>Attempt to gain unauthorized access to the Services or its related systems or networks.</li>
            <li>Transmit any viruses, worms, or other malicious code.</li>
          </ul>
          <h2 className="3xl font-bold text-gray-900 mt-10 mb-4">4. Intellectual Property</h2>
          <p>
            All content, features, and functionality on the Services, including but not limited to text, graphics,
            logos, icons, images, audio clips, video clips, data compilations, and software, are the exclusive property
            of Avexra or its licensors and are protected by international copyright, trademark, patent, trade secret,
            and other intellectual property or proprietary rights laws.
          </p>
          <h2 className="3xl font-bold text-gray-900 mt-10 mb-4">5. Disclaimer of Warranties</h2>
          <p>
            The Services are provided on an "as is" and "as available" basis, without any warranties of any kind, either
            express or implied, including but not limited to implied warranties of merchantability, fitness for a
            particular purpose, non-infringement, or course of performance.
          </p>
          <h2 className="3xl font-bold text-gray-900 mt-10 mb-4">6. Limitation of Liability</h2>
          <p>
            In no event shall Avexra, nor its directors, employees, partners, agents, suppliers, or affiliates, be
            liable for any indirect, incidental, special, consequential, or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access
            to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on
            the Services; (iii) any content obtained from the Services; and (iv) unauthorized access, use, or alteration
            of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any
            other legal theory, whether or not we have been informed of the possibility of such damage, and even if a
            remedy set forth herein is found to have failed of its essential purpose.
          </p>
          <h2 className="3xl font-bold text-gray-900 mt-10 mb-4">7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without
            regard to its conflict of law provisions.
          </p>
          <h2 className="3xl font-bold text-gray-900 mt-10 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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

export default TermsOfServicePage
