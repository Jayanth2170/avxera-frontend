import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Homepage from "./pages/Homepage"
import JobApplicationPage from "./pages/JobApplicationPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import TermsOfServicePage from "./pages/TermsOfServicePage"
import CookiePolicyPage from "./pages/CookiePolicyPage"
import CompliancePage from "./pages/CompliancePage"
import AboutUsPage from "./pages/AboutUsPage" // New import
import CareersPage from "./pages/CareersPage" // New import
import EnterpriseAIPage from "./pages/solutions/EnterpriseAIPage" // New import
import CloudServicesPage from "./pages/solutions/CloudServicesPage" // New import
import CybersecurityPage from "./pages/solutions/CybersecurityPage" // New import
import DigitalTransformationPage from "./pages/solutions/DigitalTransformationPage" // New import
import BlogPage from "./pages/BlogPage" // New import
import CaseStudiesPage from "./pages/CaseStudiesPage" // New import
import WhitepapersPage from "./pages/WhitepapersPage" // New import
import SupportCenterPage from "./pages/SupportCenterPage" // New import
import RequestFormPage from "./pages/RequestFormPage" // New import

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/apply" element={<JobApplicationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/about-us" element={<AboutUsPage />} /> {/* New route */}
          <Route path="/careers-page" element={<CareersPage />} /> {/* New route */}
          <Route path="/solutions/enterprise-ai" element={<EnterpriseAIPage />} /> {/* New route */}
          <Route path="/solutions/cloud-services" element={<CloudServicesPage />} /> {/* New route */}
          <Route path="/solutions/cybersecurity" element={<CybersecurityPage />} /> {/* New route */}
          <Route path="/solutions/digital-transformation" element={<DigitalTransformationPage />} /> {/* New route */}
          <Route path="/blog-page" element={<BlogPage />} /> {/* New route */}
          <Route path="/case-studies-page" element={<CaseStudiesPage />} /> {/* New route */}
          <Route path="/whitepapers-page" element={<WhitepapersPage />} /> {/* New route */}
          <Route path="/support-center" element={<SupportCenterPage />} /> {/* New route */}
          <Route path="/request-form" element={<RequestFormPage />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
