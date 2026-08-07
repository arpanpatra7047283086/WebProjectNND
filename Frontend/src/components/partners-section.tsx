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

const partnerAccents = [
  'from-sky-400/25 via-cyan-400/15 to-emerald-400/20',
  'from-rose-400/25 via-orange-400/15 to-amber-400/20',
  'from-violet-400/25 via-fuchsia-400/15 to-pink-400/20',
  'from-lime-400/25 via-green-400/15 to-emerald-400/20',
]

export function PartnersSection() {
  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
            <ShieldCheck className="h-4 w-4" />
            Trusted Network
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground text-balance"
        >
          Our Corporate Partners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground text-pretty leading-relaxed"
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
              className={`group relative flex items-center justify-center overflow-hidden rounded-3xl border border-border bg-card p-6 h-32 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${partnerAccents[index % partnerAccents.length]} opacity-100 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-accent to-primary opacity-80" />
              <img
                src={partner.src}
                alt={`${partner.name} logo`}
                className="relative z-10 max-h-16 w-auto max-w-full object-contain grayscale opacity-85 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 border-t border-border pt-10">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            Security &amp; Compliance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {badges.map((badge, index) => (
              <div
                key={badge.name}
                className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-border px-8 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  index === 0
                    ? 'bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50'
                    : 'bg-gradient-to-r from-fuchsia-50 via-pink-50 to-amber-50'
                }`}
              >
                <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />
                <img
                  src={badge.src}
                  alt={`${badge.name} badge`}
                  className="relative z-10 max-h-12 w-auto object-contain"
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
