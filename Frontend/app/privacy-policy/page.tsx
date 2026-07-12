'use client'

import { LegalPage } from '@/components/legal-page'
import { ShieldCheck } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      icon={ShieldCheck}
      badge="Your Privacy Matters"
      title="Privacy"
      highlight="Policy"
      intro="This policy explains how Neoplas Fintech Private Limited collects, uses, and protects your personal information."
      lastUpdated="January 2024"
      sections={[
        {
          heading: 'Information We Collect',
          paragraphs: [
            'We collect information you provide directly to us as well as data generated automatically when you use our services.',
          ],
          bullets: [
            'Personal details such as name, email address, phone number, and address.',
            'Transaction and payment information required to process your requests.',
            'KYC documents as mandated by applicable regulations.',
            'Device, log, and usage data to improve and secure our platform.',
          ],
        },
        {
          heading: 'How We Use Your Information',
          bullets: [
            'To provide, operate, and maintain our financial services.',
            'To process transactions and send related confirmations.',
            'To comply with legal, regulatory, and KYC/AML obligations.',
            'To detect, prevent, and address fraud or security issues.',
            'To send service updates and, with consent, marketing communications.',
          ],
        },
        {
          heading: 'Information Sharing',
          paragraphs: [
            'We do not sell your personal information. We may share data with regulated banking and payment partners, service providers, and authorities strictly as required to deliver our services or comply with the law.',
          ],
        },
        {
          heading: 'Data Security',
          paragraphs: [
            'We implement industry-standard technical and organizational measures, including encryption and access controls, to protect your data against unauthorized access, alteration, or disclosure.',
          ],
        },
        {
          heading: 'Your Rights',
          bullets: [
            'Access and request a copy of the personal data we hold about you.',
            'Request correction of inaccurate or incomplete information.',
            'Request deletion of your data, subject to legal retention requirements.',
            'Withdraw consent for marketing communications at any time.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use cookies and similar technologies to remember your preferences, analyze traffic, and improve your experience. You can manage cookie preferences through your browser settings.',
          ],
        },
      ]}
    />
  )
}
