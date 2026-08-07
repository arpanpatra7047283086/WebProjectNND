'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from '@/components/app-image'
import { motion } from 'framer-motion'
import Link from '@/components/app-link'
import { ArrowRight, CheckCircle2, type LucideIcon } from 'lucide-react'

export interface ServiceDetailProps {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  features: { icon: LucideIcon; title: string; description: string }[]
  benefits: string[]
  steps: { title: string; description: string }[]
}

export function ServiceDetail({
  icon: Icon,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  features,
  benefits,
  steps,
}: ServiceDetailProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 mb-6"
              >
                <span className="text-sm font-semibold text-primary">{eyebrow}</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg"
              >
                <Icon className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold mb-6 text-balance"
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                {description}
              </motion.p>
            </div>

            {image ? (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/25 to-accent/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card/85 p-5 shadow-2xl backdrop-blur">
                  <div className="rounded-2xl bg-secondary/60 p-5">
                    <Image
                      src={image}
                      alt={imageAlt ?? `${title} illustration`}
                      width={800}
                      height={600}
                      priority
                      className="h-[260px] w-full object-contain sm:h-[320px]"
                    />
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-left">
                    <div className="rounded-2xl border border-border bg-background/80 p-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Fast setup</p>
                      <p className="mt-1 text-sm font-semibold">Ready for mobile use</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-background/80 p-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Secure flow</p>
                      <p className="mt-1 text-sm font-semibold">Built for safe payments</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const FIcon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/50 transition-all"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                    <FIcon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits + Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of users who trust Neoplas Fintech for their financial needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-all"
              >
                All Services
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
