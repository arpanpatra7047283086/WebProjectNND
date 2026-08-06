'use client'

import { ServiceDetail } from '@/components/service-detail'
import { TrendingUp, PiggyBank, LineChart, Landmark } from 'lucide-react'

export default function InvestmentsPage() {
  return (
    <ServiceDetail
      icon={TrendingUp}
      eyebrow="Grow Your Wealth"
      title="Investments"
      description="Discover intelligent ways to grow your money with fixed deposits, mutual funds, and curated investment products."
      features={[
        { icon: PiggyBank, title: 'Fixed Deposits', description: 'Lock in attractive interest rates with flexible tenures and safe returns.' },
        { icon: LineChart, title: 'Mutual Funds', description: 'Start SIPs and invest in curated funds with personalized guidance.' },
        { icon: Landmark, title: 'Digital Gold', description: 'Buy and store gold digitally, starting from as little as one rupee.' },
      ]}
      benefits={[
        'Personalized recommendations based on your goals.',
        'Transparent returns with no hidden charges.',
        'Start small with flexible investment amounts.',
        'Track your portfolio performance in real time.',
      ]}
      steps={[
        { title: 'Set your goal', description: 'Tell us your investment objective and risk appetite.' },
        { title: 'Get recommendations', description: 'Receive curated product suggestions tailored to you.' },
        { title: 'Invest', description: 'Complete a quick, secure investment process.' },
        { title: 'Track & grow', description: 'Monitor performance and reinvest with ease.' },
      ]}
    />
  )
}
