'use client'

import { LegalPage } from '@/components/legal-page'
import { Lock } from 'lucide-react'

export default function SecurityPage() {
  return (
    <LegalPage
      icon={Lock}
      badge="Safety First"
      title="Security"
      highlight="Practices"
      intro="Security is at the core of everything we do. Here is how eSmartPay keeps your money and data safe."
      lastUpdated="January 2024"
      sections={[
        {
          heading: 'Data Encryption',
          paragraphs: [
            'All data transmitted between your device and our servers is encrypted using industry-standard TLS. Sensitive information is encrypted at rest to protect it from unauthorized access.',
          ],
        },
        {
          heading: 'Secure Payments',
          bullets: [
            'We partner only with regulated banks and PCI-DSS compliant payment gateways.',
            'We never store your full card details or banking credentials on our servers.',
            'Transactions are protected with multi-factor authentication where applicable.',
          ],
        },
        {
          heading: 'Fraud Prevention',
          paragraphs: [
            'Our systems continuously monitor for suspicious activity using automated risk checks. Transactions that appear fraudulent may be held or declined to protect you.',
          ],
        },
        {
          heading: 'Account Protection',
          bullets: [
            'Use a strong, unique password and never share your credentials.',
            'Enable available security features such as OTP verification.',
            'eSmartPay will never ask for your PIN, OTP, or password over calls or messages.',
          ],
        },
        {
          heading: 'Reporting a Vulnerability',
          paragraphs: [
            'If you believe you have discovered a security vulnerability, please report it responsibly to security@esmartpay.in. We appreciate the efforts of the security community in keeping our users safe.',
          ],
        },
      ]}
    />
  )
}
