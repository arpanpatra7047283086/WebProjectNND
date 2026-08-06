import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import CareersPage from '@/pages/careers'
import ContactPage from '@/pages/contact'
import ServicesPage from '@/pages/services'
import SolutionsPage from '@/pages/solutions'
import PrivacyPolicyPage from '@/pages/privacy-policy'
import RefundPolicyPage from '@/pages/refund-policy'
import SecurityPage from '@/pages/security'
import TermsAndConditionsPage from '@/pages/terms-and-conditions'
import MobileRechargePage from '@/pages/mobile-recharge'
import BillPaymentsPage from '@/pages/bill-payments'
import InvestmentsPage from '@/pages/investments'
import InsurancePage from '@/pages/insurance'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/mobile-recharge" element={<MobileRechargePage />} />
      <Route path="/services/bill-payments" element={<BillPaymentsPage />} />
      <Route path="/services/investments" element={<InvestmentsPage />} />
      <Route path="/services/insurance" element={<InsurancePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
      <Route path="/refund-policy" element={<RefundPolicyPage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
