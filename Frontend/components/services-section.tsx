'use client'

import { motion } from 'framer-motion'
import { Smartphone, CreditCard, TrendingUp, Shield, Zap, Lock } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Recharge',
    description: 'Mobile, DTH, and data card recharges in seconds',
  },
  {
    icon: CreditCard,
    title: 'Bill Payment',
    description: 'Pay all your bills from one platform',
  },
  {
    icon: TrendingUp,
    title: 'Investments',
    description: 'FDs, stocks, mutual funds with algorithmic advice',
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Car, health, travel insurance with best rates',
  },
]

const features = [
  {
    icon: Zap,
    title: 'Seamless',
    description: 'One app for all your financial needs',
  },
  {
    icon: Lock,
    title: 'Safe & Secure',
    description: 'Bank-level security for your transactions',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Smart portfolio tracking and recommendations',
  },
]

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete financial solutions designed for modern life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5 rgba(0, 102, 255, 0.1)' }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Features */}
        <motion.div
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Why Choose eSmartPay?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
