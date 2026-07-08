'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Briefcase, Users, Target, Award } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CareersPage() {
  const benefits = [
    { icon: Target, title: 'Growth Opportunities', desc: 'Continuous learning and professional development' },
    { icon: Users, title: 'Collaborative Culture', desc: 'Work with talented and passionate teams' },
    { icon: Award, title: 'Competitive Compensation', desc: 'Industry-leading salary and benefits' },
    { icon: Briefcase, title: 'Flexible Work', desc: 'Remote and flexible working options' },
  ]

  const openPositions = [
    { title: 'Senior Software Engineer', dept: 'Engineering' },
    { title: 'Product Manager', dept: 'Product' },
    { title: 'Data Analyst', dept: 'Analytics' },
    { title: 'DevOps Engineer', dept: 'Infrastructure' },
    { title: 'UI/UX Designer', dept: 'Design' },
    { title: 'Business Development', dept: 'Sales' },
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
                <span className="text-sm font-semibold text-primary">Join Our Team</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
                Build the Future of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Finance</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join SmartPay and help revolutionize financial services in India. We&apos;re looking for talented individuals to grow with us.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#positions">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    View Openings <ArrowRight className="w-5 h-5" />
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
            <h2 className="text-4xl font-bold mb-4">Why Join SmartPay?</h2>
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

      <section id="positions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{job.dept}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
