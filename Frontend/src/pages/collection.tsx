'use client'

import { ServiceDetail } from '@/components/service-detail'
import { HandCoins, WalletCards, FileText, ShieldCheck } from 'lucide-react'

export default function CollectionPage() {
  return (
    <ServiceDetail
      icon={HandCoins}
      eyebrow="Payment Collection"
      title="Collection"
      description="Manage business payment collection with a simple, reliable workflow that helps you track and collect funds efficiently."
      image="/services/collection.png"
      imageAlt="Collection service illustration"
      suggestedPages={[
        { title: 'Mobile Recharge', description: 'Instant prepaid mobile, DTH, and data card top-ups.', href: '/services/mobile-recharge' },
        { title: 'Bill Payments', description: 'Pay electricity, water, gas, and broadband bills.', href: '/services/bill-payments' },
        { title: 'Collection', description: 'Seamless payment collection tools for businesses.', href: '/services/collection', selected: true },
        { title: 'PAN Card', description: 'Apply for new and duplicate PAN cards.', href: '/services/pancard' },
      ]}
      features={[
        { icon: WalletCards, title: 'Multiple Payment Modes', description: 'Accept common payment methods through one streamlined process.' },
        { icon: FileText, title: 'Clear Records', description: 'Keep a track of payments, receipts, and transaction histories.' },
        { icon: ShieldCheck, title: 'Reliable Handling', description: 'Improve collection workflows with consistent and secure operations.' },
      ]}
      benefits={[
        'Useful for recurring or business-led collections.',
        'Creates a smoother payment flow for your customers.',
        'Helps keep records organized and accessible.',
        'Supports outlet-level payment operations.',
      ]}
      steps={[
        { title: 'Start collection', description: 'Initiate the collection request with the required customer details.' },
        { title: 'Record amount', description: 'Enter or verify the payment amount.' },
        { title: 'Confirm payment', description: 'Complete the transaction and log the outcome.' },
        { title: 'Save receipt', description: 'Store the record for future reference.' },
      ]}
    />
  )
}
