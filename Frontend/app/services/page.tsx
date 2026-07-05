'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Smartphone, CreditCard, TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Recharge',
    description: 'Instant mobile and DTH recharges with zero hassle. Pay bills for any service provider across India.'
  },
  {
    icon: CreditCard,
    title: 'Bill Payments',
    description: 'Pay all your bills - electricity, water, gas, internet - in one place with instant confirmation.'
  },
  {
    icon: TrendingUp,
    title: 'Investments',
    description: 'Invest in FDs, stocks, mutual funds with algorithmic advice and personalized recommendations.'
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Get best insurance rates for health, car, travel and more with instant digital contracts.'
  },
  {
    icon: Zap,
    title: 'Mini ATM',
    description: 'Cash management and withdrawal services available 24/7 at your convenience.'
  },
  {
    icon: BarChart3,
    title: 'AEPS Services',
    description: 'Aadhaar-enabled payments for seamless transactions and agent network expansion.'
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive fintech solutions designed to simplify your financial life
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4"
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-8"
          >
            Join thousands of users who trust eSmartPay for their financial needs
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all"
          >
            Create Account
          </motion.button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
