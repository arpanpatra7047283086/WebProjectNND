'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    image: '/services/recharges.webp',
    title: 'Mobile Recharge',
    description: 'Instant mobile and DTH recharges with zero hassle. Pay bills for any service provider across India.'
  },
  {
    image: '/services/utility.jpg',
    title: 'Utility Payments',
    description: 'Pay all your bills - electricity, water, gas, internet - in one place with instant confirmation.'
  },
  {
    image: '/services/aeps.png',
    title: 'AePS',
    description: 'Aadhaar-enabled payments for seamless transactions and agent network expansion.'
  },
  {
    image: '/services/matm.png',
    title: 'Micro ATM',
    description: 'Card-based cash withdrawal and management services available 24/7 at your convenience.'
  },
  {
    image: '/services/collection.png',
    title: 'Collection',
    description: 'Seamless payment collection tools to grow and manage your business with ease.'
  },
  {
    image: '/services/pancard.png',
    title: 'PAN Card',
    description: 'Apply for new and duplicate PAN cards quickly with a simple, guided process.'
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
                  <div className="bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="mb-4"
                    >
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={112}
                        height={112}
                        className="w-28 h-28 object-contain"
                      />
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
