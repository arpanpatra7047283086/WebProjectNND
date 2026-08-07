'use client'

import { ServiceDetail } from '@/components/service-detail'
import { BadgeIndianRupee, ScanText, IdCard, ShieldCheck } from 'lucide-react'

export default function PancardPage() {
  return (
    <ServiceDetail
      icon={IdCard}
      eyebrow="Identity Services"
      title="PAN Card"
      description="Apply for a new PAN card or request duplicate support through a guided, simplified process."
      image="/services/pancard.png"
      imageAlt="PAN card service illustration"
      suggestedPages={[
        { title: 'Mobile Recharge', description: 'Instant prepaid mobile, DTH, and data card top-ups.', href: '/services/mobile-recharge' },
        { title: 'AePS', description: 'Aadhaar-enabled payment and cash withdrawal services.', href: '/services/aeps' },
        { title: 'Collection', description: 'Seamless payment collection tools for businesses.', href: '/services/collection' },
        { title: 'PAN Card', description: 'Apply for new and duplicate PAN cards.', href: '/services/pancard', selected: true },
      ]}
      features={[
        { icon: ScanText, title: 'Simple Application', description: 'Use a guided flow to submit PAN details with ease.' },
        { icon: BadgeIndianRupee, title: 'Affordable Process', description: 'Support customers with a clear and cost-effective process.' },
        { icon: ShieldCheck, title: 'Document Safe', description: 'Handle identity and document data with care and structure.' },
      ]}
      benefits={[
        'Easy support for new and duplicate PAN requests.',
        'Helpful guided steps for users.',
        'Secure handling of identity details.',
        'Complements financial and onboarding services.',
      ]}
      steps={[
        { title: 'Enter details', description: 'Provide the required identity and contact information.' },
        { title: 'Upload documents', description: 'Share the necessary supporting documents.' },
        { title: 'Review request', description: 'Check the details before submission.' },
        { title: 'Track status', description: 'Monitor application progress after submission.' },
      ]}
    />
  )
}
