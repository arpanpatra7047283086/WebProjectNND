'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function RefundPolicyPage() {
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
            <h1 className="text-5xl font-bold mb-4">Refund Policy</h1>
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
                <h2 className="text-3xl font-bold mb-4">1. General Refund Policy</h2>
                <p className="text-slate-600 leading-relaxed">
                  eSmartPay is committed to providing excellent customer service. If you are not satisfied with our services, we will work with you to resolve the issue. Please contact our support team within 30 days of your transaction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">2. Eligible Transactions</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Refunds are available for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Duplicate transactions or payment processing errors</li>
                  <li>Failed transactions where debit occurred</li>
                  <li>Unauthorized transactions (with proper verification)</li>
                  <li>Service cancellations within the specified timeframe</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">3. Non-Refundable Items</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  The following transactions are non-refundable:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Intentional bill payments made by the customer</li>
                  <li>Completed mobile recharges or data top-ups</li>
                  <li>Insurance premiums paid by the customer</li>
                  <li>Investment transactions as per investment guidelines</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">4. Refund Process</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  To request a refund:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-slate-600">
                  <li>Contact our support team with transaction details</li>
                  <li>Provide necessary documentation and verification</li>
                  <li>Our team will review and process your request</li>
                  <li>Approved refunds will be credited within 5-7 business days</li>
                </ol>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">5. Processing Time</h2>
                <p className="text-slate-600 leading-relaxed">
                  Refunds are processed within 5-7 business days. The time may vary depending on your bank or financial institution. Please ensure all required documentation is submitted for faster processing.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">6. Contact Support</h2>
                <p className="text-slate-600 leading-relaxed">
                  For refund inquiries or disputes, please contact our support team at support@esmartpay.com or call +91 98765 43210.
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
