'use client'

import { ServiceDetail } from '@/components/service-detail'
import { Smartphone, Zap, Tv, Wifi } from 'lucide-react'

export default function MobileRechargePage() {
  return (
    <ServiceDetail
      icon={Smartphone}
      eyebrow="Instant Recharges"
      title="Mobile & DTH Recharge"
      description="Top up prepaid mobiles, DTH connections, and data cards for every major operator across India in just a few seconds."
      features={[
        { icon: Zap, title: 'Instant Top-Up', description: 'Recharges are processed in real time with immediate confirmation on every transaction.' },
        { icon: Tv, title: 'All DTH Operators', description: 'Recharge Tata Play, Airtel, Dish TV, d2h, and more from a single dashboard.' },
        { icon: Wifi, title: 'Data Cards', description: 'Keep your dongles and data cards topped up without ever leaving home.' },
      ]}
      benefits={[
        'Support for all prepaid mobile operators across India.',
        'Best-in-class success rates with automatic retry on failures.',
        'Save frequently used numbers for one-tap recharges.',
        'Earn commissions on every recharge as an eSmartPay agent.',
      ]}
      steps={[
        { title: 'Enter details', description: 'Choose the operator and enter the mobile or DTH number.' },
        { title: 'Select a plan', description: 'Pick from available recharge plans and packs.' },
        { title: 'Pay securely', description: 'Complete payment through your preferred method.' },
        { title: 'Get confirmation', description: 'Receive instant confirmation and a digital receipt.' },
      ]}
    />
  )
}
