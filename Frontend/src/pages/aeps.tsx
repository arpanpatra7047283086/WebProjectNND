'use client'

import { ServiceDetail } from '@/components/service-detail'
import { Fingerprint, ShieldCheck, ArrowLeftRight, Banknote } from 'lucide-react'

export default function AepsPage() {
  return (
    <ServiceDetail
      icon={Fingerprint}
      eyebrow="Aadhaar Enabled"
      title="AePS"
      description="Use Aadhaar-based banking services for cash withdrawal, balance inquiry, and secure assisted transactions."
      image="/services/aeps.png"
      imageAlt="AePS service illustration"
      suggestedPages={[
        { title: 'Mobile Recharge', description: 'Instant prepaid mobile, DTH, and data card top-ups.', href: '/services/mobile-recharge' },
        { title: 'Bill Payments', description: 'Pay electricity, water, gas, and broadband bills.', href: '/services/bill-payments' },
        { title: 'AePS', description: 'Aadhaar-enabled payment and cash withdrawal services.', href: '/services/aeps', selected: true },
        { title: 'Micro ATM', description: 'Card-based cash withdrawal at agent points.', href: '/services/micro-atm' },
      ]}
      features={[
        { icon: ShieldCheck, title: 'Secure Identity Check', description: 'Transactions are verified through Aadhaar and OTP-based safeguards.' },
        { icon: ArrowLeftRight, title: 'Cash Withdrawal', description: 'Withdraw cash quickly through a trusted agent network.' },
        { icon: Banknote, title: 'Balance Inquiry', description: 'Check account balance and mini statements in seconds.' },
      ]}
      benefits={[
        'Aadhaar-enabled banking at nearby agent outlets.',
        'Simple assisted workflow for rural and urban users.',
        'Fast and secure transaction confirmation.',
        'Ideal for cash access and basic account services.',
      ]}
      steps={[
        { title: 'Verify Aadhaar', description: 'Enter the Aadhaar details and complete verification.' },
        { title: 'Choose service', description: 'Select withdrawal, balance inquiry, or statement.' },
        { title: 'Confirm request', description: 'Approve the transaction using the required authentication.' },
        { title: 'Receive result', description: 'Get instant confirmation and receipt details.' },
      ]}
    />
  )
}
