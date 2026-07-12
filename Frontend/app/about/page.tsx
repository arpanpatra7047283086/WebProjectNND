'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PartnersSection } from '@/components/partners-section'
import { motion } from 'framer-motion'
import { CheckCircle2, Target, Eye, Users } from 'lucide-react'

const values = [
  {
    icon: CheckCircle2,
    title: 'Integrity',
    description: 'We maintain the highest standards of honesty in all our dealings'
  },
  {
    icon: Users,
    title: 'Trust',
    description: 'Every promise we make to our customers is kept with dedication'
  },
  {
    icon: Target,
    title: 'Customer First',
    description: 'Customers are at the center of everything we do'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'No hidden charges, complete transparency in all operations'
  },
]

const stats = [
  { number: '500K+', label: 'Active Users' },
  { number: '25K+', label: 'Direct Outlets' },
  { number: '21M+', label: 'Monthly Services' },
  { number: '10K+', label: 'Pin Codes Covered' },
]

const timeline = [
  {
    year: '2018',
    title: 'Launch',
    description: 'Digital Seva Kendra Service launched in Delhi NCR, Mumbai and Bengaluru'
  },
  {
    year: '2019',
    title: 'Expansion',
    description: 'Mobile wallet launch in accordance with RBI guidelines'
  },
  {
    year: '2021',
    title: 'Growth',
    description: 'PAN India operations began with agent network expansion'
  },
  {
    year: '2024',
    title: 'Innovation',
    description: 'Advanced AI-powered solutions and platform enhancements'
  },
]

export default function AboutPage() {
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
            About Neoplas Fintech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Revolutionizing fintech to make financial services accessible to every underserved segment
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a world where every person in India has access to world-class financial services, regardless of their location or background. Our mission is to build an unparalleled platform that brings finance services to the doorstep of consumers, making banking and financial operations seamless and transparent.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Goal</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that customer success is the ultimate measure of our achievements. Every decision we make, every feature we build, and every service we offer is designed with one goal in mind: helping our customers achieve financial freedom and peace of mind. We achieve this through innovation, reliability, and customer-centric solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Journey
          </motion.h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {item.year.slice(2)}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-primary to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <PartnersSection />

      <Footer />
    </main>
  )
}
