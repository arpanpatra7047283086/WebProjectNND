'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Zap } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BecomeAgentPage() {
  const benefits = [
    { icon: TrendingUp, title: 'High Earnings', desc: 'Competitive commission structure on every transaction' },
    { icon: Users, title: 'Marketing Support', desc: 'Complete marketing and promotional support from our team' },
    { icon: Award, title: 'Training', desc: 'Comprehensive training and ongoing support' },
    { icon: Zap, title: 'Easy Setup', desc: 'Simple and quick onboarding process' },
  ]

  const requirements = [
    'Indian citizenship with valid address proof',
    'PAN card and bank account',
    'Mobile phone and internet connection',
    '18+ years of age',
    'Basic computer/smartphone knowledge',
    'Active participation in community',
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="relative min-h-screen pt-32 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm font-semibold text-primary">Business Opportunity</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
                Become a SmartPay <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Agent</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Start your own business with minimal investment. Earn excellent commissions while providing financial services to your community.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    Apply Now <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="hidden md:flex justify-center"
            >
              <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                <Users className="w-32 h-32 text-primary opacity-20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Agent Benefits</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-8 text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Who Can Be an Agent?</h2>
              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                    <span className="text-muted-foreground">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Why Agents Love SmartPay</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">★</span>
                  <span>Flexible working hours and work from anywhere</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">★</span>
                  <span>No sales targets or pressure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">★</span>
                  <span>Multiple earning streams through various services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">★</span>
                  <span>Dedicated agent support team</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">★</span>
                  <span>Instant commission payouts</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
