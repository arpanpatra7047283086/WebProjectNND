'use client'

import { ServiceDetail } from '@/components/service-detail'
import { CreditCard, Receipt, Wallet, ShieldCheck } from 'lucide-react'

export default function MicroAtmPage() {
  return (
    <ServiceDetail
      icon={CreditCard}
      eyebrow="Cash Access"
      title="Micro ATM"
      description="Offer card-based cash withdrawal and basic banking services through a compact, agent-friendly micro ATM flow."
      image="/services/matm.png"
      imageAlt="Micro ATM service illustration"
      suggestedPages={[
        { title: 'Mobile Recharge', description: 'Instant prepaid mobile, DTH, and data card top-ups.', href: '/services/mobile-recharge' },
        { title: 'AePS', description: 'Aadhaar-enabled payment and cash withdrawal services.', href: '/services/aeps' },
        { title: 'Micro ATM', description: 'Card-based cash withdrawal at agent points.', href: '/services/micro-atm', selected: true },
        { title: 'Collection', description: 'Seamless payment collection tools for businesses.', href: '/services/collection' },
      ]}
      features={[
        { icon: Wallet, title: 'Cash Withdrawal', description: 'Provide quick cash access using debit or ATM cards.' },
        { icon: Receipt, title: 'Transaction Proof', description: 'Every completed transaction can generate a clear receipt.' },
        { icon: ShieldCheck, title: 'Secure Processing', description: 'Built to support safe and controlled customer interactions.' },
      ]}
      benefits={[
        'Works well for agent-led banking assistance.',
        'Helps users access cash in a simple flow.',
        'Fast confirmation for every completed request.',
        'Supports daily banking needs at the outlet level.',
      ]}
      steps={[
        { title: 'Insert card', description: 'Capture the customer card details in the micro ATM flow.' },
        { title: 'Enter amount', description: 'Choose the withdrawal or service amount.' },
        { title: 'Authenticate', description: 'Complete the required verification step.' },
        { title: 'Dispense cash', description: 'Finish the transaction and confirm the receipt.' },
      ]}
    />
  )
}
