'use client'

import { ServiceDetail } from '@/components/service-detail'
import { CreditCard, Lightbulb, Droplet, Flame } from 'lucide-react'

export default function BillPaymentsPage() {
  return (
    <ServiceDetail
      icon={CreditCard}
      eyebrow="Pay All Bills"
      title="Bill Payments"
      description="Pay electricity, water, gas, broadband, and other utility bills in one place with instant confirmation and reminders."
      image="/services/utility.png"
      imageAlt="Utility payment service illustration"
      features={[
        { icon: Lightbulb, title: 'Electricity Bills', description: 'Pay bills for every state electricity board with instant receipts.' },
        { icon: Droplet, title: 'Water & Utilities', description: 'Clear water, municipal, and other utility dues without the queues.' },
        { icon: Flame, title: 'Gas & Broadband', description: 'Book gas cylinders and pay broadband bills in a couple of taps.' },
      ]}
      benefits={[
        'Single dashboard for every utility and service provider.',
        'Timely reminders so you never miss a due date.',
        'Instant confirmation and downloadable receipts.',
        'Secure, encrypted transactions on every payment.',
      ]}
      steps={[
        { title: 'Select biller', description: 'Choose your service provider from the biller directory.' },
        { title: 'Fetch bill', description: 'Enter your consumer number to fetch the outstanding amount.' },
        { title: 'Confirm & pay', description: 'Review the details and pay through your preferred method.' },
        { title: 'Save receipt', description: 'Download or share the receipt for your records.' },
      ]}
    />
  )
}
