'use client'

import { Navbar } from '@/components/navbar' 
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Code2, Clock, Zap, Shield, Users, Smartphone, HeartHandshake, Lock, BarChart } from 'lucide-react'

const solutions = [
  {
    icon: Code2,
    title: 'All-in-One Solution',
    description: 'Our team guides you through a seamless digital transformation. From initial concept and UI/UX design to development and ongoing support, we collaborate with you at every stage.',
    benefits: ['Consultation', 'UI/UX Design', 'Development', 'Maintenance']
  },
  {
    icon: Zap,
    title: 'Clean Code',
    description: 'We believe clean code is intuitive and easily understood by any developer. It is readable, scalable, and maintainable, ensuring long-term project health.',
    benefits: ['Readability', 'Extensibility', 'Maintainability', 'Quality']
  },
  {
    icon: Clock,
    title: '24x7 Support',
    description: 'Our top-tier customer service team is dedicated to assisting you around the clock, ready to answer your questions and resolve any issues whenever you need us.',
    benefits: ['Round-the-clock Support', 'Quick Response', 'Expert Team', 'Reliable Service']
  },
  {
    icon: Smartphone,
    title: 'Easy Integration',
    description: 'Our platform offers straightforward integration for your web and mobile applications, allowing for a quick and simple setup process with no complex configurations.',
    benefits: ['API Integration', 'Mobile Ready', 'Fast Setup', 'Scalable']
  },
]

const agentProgram = [
  {
    title: 'Profitable MPOS Solution',
    description: 'Maximize your earnings with competitive commissions on every transaction through our state-of-the-art MPOS technology.'
  },
  {
    title: 'MATM & AEPS Services',
    description: 'Broaden your service offerings and attract more customers by providing cash withdrawal and Aadhaar-enabled payments.'
  },
  {
    title: 'Insurance Plans',
    description: 'Generate a steady stream of income by offering valuable and affordable insurance solutions to your customer base.'
  },
  {
    title: 'Business Growth Support',
    description: 'Accelerate your growth with our comprehensive support, including marketing materials, professional training, and dedicated assistance.'
  },
]

const whyChooseUsFeatures = [
  {
    icon: HeartHandshake,
    text: 'Outstanding Customer Service - Great customer support available whenever you need it'
  },
  {
    icon: Lock,
    text: 'Safety First - Safe and secure banking experience with industry-leading encryption'
  },
  {
    icon: BarChart,
    text: 'Seamless Integration - One platform for all your financial and banking needs'
  },
  {
    icon: Shield,
    text: 'Transparent Pricing - No small print, no additional fees, just honest pricing'
  }
];


export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Business Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Unlock Your Business Potential with eSmartPay's Advanced Payment and Banking Services.
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg hover:border-primary/50 transition-all">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4"
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Agent Program */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Become an eSmartPay Agent</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our expanding network of successful agents and unlock a new stream of profitable income.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentProgram.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all hover:scale-105">
              Become an Agent
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose eSmartPay?
          </motion.h2>
          <div className="space-y-6">
            {whyChooseUsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start bg-card border border-border rounded-lg p-6">
                <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">{feature.text}</p>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
