'use client'

import { ServiceDetail } from '@/components/service-detail'
import { Shield, HeartPulse, Car, Plane } from 'lucide-react'

export default function InsurancePage() {
  return (
    <ServiceDetail
      icon={Shield}
      eyebrow="Protect What Matters"
      title="Insurance"
      description="Get the best insurance rates for health, motor, and travel with instant digital policies and hassle-free claims."
      features={[
        { icon: HeartPulse, title: 'Health Insurance', description: 'Comprehensive health cover for you and your family at affordable premiums.' },
        { icon: Car, title: 'Motor Insurance', description: 'Instant car and two-wheeler policies with quick renewals.' },
        { icon: Plane, title: 'Travel Insurance', description: 'Stay protected on every trip with flexible travel cover.' },
      ]}
      benefits={[
        'Compare plans from leading insurers in one place.',
        'Instant digital policy issuance and renewals.',
        'Affordable premiums with transparent terms.',
        'Dedicated support for smooth, quick claims.',
      ]}
      steps={[
        { title: 'Choose cover', description: 'Select the type of insurance you need.' },
        { title: 'Compare plans', description: 'Review quotes and coverage from multiple insurers.' },
        { title: 'Buy instantly', description: 'Complete a secure purchase and get your policy digitally.' },
        { title: 'Stay covered', description: 'Renew easily and get support whenever you need it.' },
      ]}
    />
  )
}
