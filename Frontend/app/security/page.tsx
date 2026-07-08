'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Lock, Shield, Key, Eye } from 'lucide-react'

export default function SecurityPage() {
  const features = [
    { icon: Lock, title: 'SSL Encryption', desc: 'All data transmitted with 256-bit SSL encryption' },
    { icon: Shield, title: 'Data Protection', desc: 'Advanced firewalls and intrusion detection systems' },
    { icon: Key, title: 'Authentication', desc: 'Multi-factor authentication for account security' },
    { icon: Eye, title: 'Monitoring', desc: '24/7 security monitoring and threat detection' },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Your Security is <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Priority</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              SmartPay employs industry-leading security measures to protect your financial information and transactions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-6">Security Standards</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span>PCI DSS Certified for secure payment processing</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span>ISO 27001 Certified for information security management</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span>Regular security audits and penetration testing</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span>Compliance with RBI guidelines for digital payments</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span>Data encryption at rest and in transit</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span>Secure authentication protocols and session management</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
