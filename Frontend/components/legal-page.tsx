'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

export interface LegalSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface LegalPageProps {
  icon: LucideIcon
  badge: string
  title: string
  highlight: string
  intro: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalPage({
  icon: Icon,
  badge,
  title,
  highlight,
  intro,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="relative flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10" />
          <div className="absolute -top-20 right-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10" />
          <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 -z-10" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-sm font-bold text-primary mb-6 border border-primary/20 shadow-sm"
            >
              <Icon className="h-4 w-4" />
              {badge}
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900">
              {title}{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {highlight}
              </span>
            </h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
            <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">{intro}</p>
            <p className="text-slate-400 text-sm mt-4">Last updated: {lastUpdated}</p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100"
              >
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black shadow-inner text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.heading}
                </h2>
                <div className="space-y-4 md:pl-14 text-slate-600 leading-relaxed">
                  {section.paragraphs?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-3">
                      {section.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 p-8 bg-slate-900 rounded-3xl text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-16 -mt-16" />
            <p className="text-lg font-black mb-2">Questions about this policy?</p>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Reach out to our team and we will be happy to help clarify anything.
            </p>
            <a
              href="mailto:legal@esmartpay.in"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl font-black text-sm hover:bg-slate-50 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
