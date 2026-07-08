'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Briefcase, MapPin, Clock, Rocket, Heart, GraduationCap, Users, ArrowRight } from 'lucide-react'

const perks = [
  { icon: Rocket, title: 'Growth First', description: 'Fast-track your career with real ownership and impactful projects.' },
  { icon: Heart, title: 'Well-being', description: 'Health cover, flexible time off, and a culture that respects balance.' },
  { icon: GraduationCap, title: 'Learn & Upskill', description: 'Learning budgets, mentorship, and access to industry experts.' },
  { icon: Users, title: 'Great People', description: 'Work alongside a passionate, collaborative, and diverse team.' },
]

const openings = [
  { title: 'Senior Frontend Engineer', team: 'Engineering', location: 'New Delhi', type: 'Full-time' },
  { title: 'Backend Engineer (Payments)', team: 'Engineering', location: 'Remote, India', type: 'Full-time' },
  { title: 'Product Designer', team: 'Design', location: 'New Delhi', type: 'Full-time' },
  { title: 'Regional Sales Manager', team: 'Sales', location: 'Mumbai', type: 'Full-time' },
  { title: 'Customer Support Executive', team: 'Support', location: 'New Delhi', type: 'Full-time' },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 mb-6"
          >
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Join Our Team</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-6 text-balance"
          >
            Build the Future of Fintech with Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            We are on a mission to make financial services accessible to everyone in India. Come grow with a team that values ownership, integrity, and impact.
          </motion.p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => {
              const Icon = perk.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{perk.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground">Find a role where you can do the best work of your career.</p>
          </motion.div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-lg hover:border-primary/50 transition-all"
              >
                <div>
                  <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{job.team}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</span>
                  </div>
                </div>
                <Link href="/contact">
                  <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg transition-all flex items-center gap-2 group-hover:translate-x-1">
                    Apply <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12 bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-bold mb-2">Don&apos;t see the right role?</h3>
            <p className="text-muted-foreground mb-6">We are always looking for great people. Send us your resume and we will get in touch.</p>
            <Link href="/contact">
              <button className="px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-all">
                Send Your Resume
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
