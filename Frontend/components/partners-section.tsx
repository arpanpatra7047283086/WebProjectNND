'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const partners = [
  { name: 'Razorpay', src: '/partners/cp1.jpeg' },
  { name: 'Cashfree Payments', src: '/partners/cp2.jpeg' },
  { name: 'Fino Payments Bank', src: '/partners/cp3.jpeg' },
  { name: 'K1 Pay India', src: '/partners/cp5.jpeg' },
  { name: 'PaySprint', src: '/partners/cp6.jpeg' },
  { name: 'Kotak', src: '/partners/cp7.jpeg' },
  { name: 'IDFC FIRST Bank', src: '/partners/cp8.jpeg' },
  { name: 'PayU', src: '/partners/cp9.jpeg' },
  { name: 'Toshani', src: '/partners/cp10.jpeg' },
  { name: 'Pay2ALL Services Pvt Ltd', src: '/partners/cp11.jpeg' },
  { name: 'Book Nearby', src: '/partners/cp12.jpeg' },
]

const badges = [
  { name: 'PCI DSS Compliant', src: '/partners/footer1.jpeg' },
  { name: 'GoDaddy Verified & Secured', src: '/partners/footer2.jpeg' },
]

export function PartnersSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
            <ShieldCheck className="h-4 w-4" />
            Trusted Network
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900 text-balance"
        >
          Our Corporate Partners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl mx-auto text-center text-lg text-slate-500 text-pretty leading-relaxed"
        >
          We collaborate with India&apos;s leading banks, payment gateways, and fintech
          platforms to deliver secure, reliable financial services at scale.
        </motion.p>

        {/* Logo grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group flex items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 h-32 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:border-slate-200"
            >
              <img
                src={partner.src || '/placeholder.svg'}
                alt={`${partner.name} logo`}
                className="max-h-16 w-auto max-w-full object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 border-t border-slate-100 pt-10">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Security &amp; Compliance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className="flex items-center justify-center rounded-xl border border-slate-100 bg-white px-8 py-4 shadow-sm"
              >
                <img
                  src={badge.src || '/placeholder.svg'}
                  alt={`${badge.name} badge`}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
