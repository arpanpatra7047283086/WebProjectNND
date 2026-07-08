'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-slate-600">Last updated: January 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
                <p className="text-slate-600 leading-relaxed">
                  eSmartPay (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the eSmartPay website and mobile application. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Account information (name, email, phone number, address)</li>
                  <li>Financial information (bank details, transaction history)</li>
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, clicks)</li>
                  <li>Communications (support inquiries, feedback)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We use the information we collect for various purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process transactions and send related information</li>
                  <li>To send marketing and promotional communications</li>
                  <li>To detect, prevent, and address fraud and security issues</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">4. Data Security</h2>
                <p className="text-slate-600 leading-relaxed">
                  We implement appropriate technical and organizational measures designed to protect personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">5. Your Rights</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">6. Contact Us</h2>
                <p className="text-slate-600 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at privacy@esmartpay.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
