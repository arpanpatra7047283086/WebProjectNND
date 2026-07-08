'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, AlertCircle, CheckCircle2, Zap } from 'lucide-react'

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All your data is encrypted using industry-standard SSL/TLS protocols',
  },
  {
    icon: Shield,
    title: 'Multi-Factor Authentication',
    description: 'Protect your account with two-factor authentication options',
  },
  {
    icon: Eye,
    title: 'Real-Time Monitoring',
    description: 'We monitor your account 24/7 for suspicious activities',
  },
  {
    icon: AlertCircle,
    title: 'Fraud Detection',
    description: 'Advanced AI-powered systems detect and prevent fraudulent transactions',
  },
  {
    icon: CheckCircle2,
    title: 'Compliance',
    description: 'Fully compliant with RBI guidelines and industry regulations',
  },
  {
    icon: Zap,
    title: 'Secure Transactions',
    description: 'PCI-DSS compliant payment processing for maximum security',
  },
]

const bestPractices = [
  'Use a strong, unique password for your eSmartPay account',
  'Enable two-factor authentication immediately',
  'Never share your OTP or login credentials',
  'Always verify URLs before accessing your account',
  'Keep your mobile app and devices updated',
  'Logout from shared devices or public computers',
  'Review your account activity regularly',
  'Report suspicious activities immediately',
]

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">Your Security is Our Priority</h1>
            <p className="text-lg text-slate-600">
              We use industry-leading security measures to protect your financial data and transactions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Security Features</h2>
            <p className="text-lg text-slate-600">
              Multiple layers of protection for your peace of mind
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8 hover:shadow-lg transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-lg bg-blue-200 flex items-center justify-center mb-4"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Security Best Practices</h2>
            <p className="text-blue-100 text-lg">
              Follow these guidelines to keep your account safe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <p className="text-white font-medium">{practice}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-12"
          >
            <h2 className="text-3xl font-bold mb-6">Compliance & Certifications</h2>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">RBI Compliant</p>
                  <p className="text-sm">Fully compliant with Reserve Bank of India guidelines</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">ISO 27001 Certified</p>
                  <p className="text-sm">Information security management system certification</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">PCI-DSS Compliant</p>
                  <p className="text-sm">Payment Card Industry Data Security Standard</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">GDPR Compliant</p>
                  <p className="text-sm">General Data Protection Regulation compliance</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Report Security Issue */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Found a Security Issue?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Report any security vulnerabilities responsibly to our security team
            </p>
            <motion.a
              href="mailto:security@esmartpay.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Report Security Issue
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
