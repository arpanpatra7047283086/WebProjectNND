'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    icon: 'rinovapay.com/assets/img/services/recharges.png',
    title: 'Mobile Recharge',
    description: 'Instant mobile and DTH recharges with zero hassle. Pay bills for any service provider across India.',
    href: '/mobile-recharge'
  },
  {
    icon: 'rinovapay.com/assets/img/services/utility.png',
    title: 'Bill Payments',
    description: 'Pay all your bills - electricity, water, gas, internet - in one place with instant confirmation.',
    href: '/bill-payments'
  },
  {
    icon: 'rinovapay.com/assets/img/services/aeps.png',
    title: 'Investments',
    description: 'Invest in FDs, stocks, mutual funds with algorithmic advice and personalized recommendations.',
    href: '/investments'
  },
  {
    icon: 'rinovapay.com/assets/img/services/matm.png',
    title: 'Insurance',
    description: 'Get best insurance rates for health, car, travel and more with instant digital contracts.',
    href: '/insurance'
  },
  {
    icon: 'rinovapay.com/assets/img/services/collection.png',
    title: 'Collections',
    description: 'Secure collection of payments with real-time settlement and detailed reporting.'
  },
  {
    icon: 'rinovapay.com/assets/img/services/pancard.png',
    title: 'PAN Services',
    description: 'PAN card application and verification services with instant digital processing.'
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
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {service.href ? (
                    <Link href={service.href}>
                      <div className="bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 relative"
                        >
                          <Image
                            src={`https://${service.icon}`}
                            alt={service.title}
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain"
                            onError={() => console.log(`Failed to load: ${service.icon}`)}
                          />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </Link>
                  ) : (
                    <div className="bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4"
                      >
                        <Image
                          src={`https://${service.icon}`}
                          alt={service.title}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain"
                          onError={() => console.log(`Failed to load: ${service.icon}`)}
                        />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  )}
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
