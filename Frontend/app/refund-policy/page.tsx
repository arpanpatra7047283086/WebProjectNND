'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-8"
          >
            Refund Policy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8 text-muted-foreground"
          >
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
              <p>
                At SmartPay, we strive to ensure that all transactions are completed successfully. This policy outlines our refund procedures and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Refund Eligibility</h2>
              <p className="mb-4">You may be eligible for a refund in the following cases:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Transaction failed due to technical error on our part</li>
                <li>Duplicate charges for the same service</li>
                <li>Service not rendered as promised</li>
                <li>Unauthorized transactions</li>
                <li>Payment made to wrong account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Non-Refundable Items</h2>
              <p className="mb-4">The following are generally non-refundable:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Successfully processed recharges or bill payments</li>
                <li>Services correctly delivered as per user request</li>
                <li>User-initiated cancellations after service completion</li>
                <li>Successful investment purchases (subject to market conditions)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Refund Process</h2>
              <p className="mb-4">To request a refund:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Contact our support team with transaction details</li>
                <li>Provide evidence of the issue (receipts, error messages, etc.)</li>
                <li>We will investigate within 7 business days</li>
                <li>If approved, refunds will be processed within 5-10 business days</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Refund Timeline</h2>
              <p>
                Processing times may vary depending on your bank or payment method. We will provide you with a refund reference number for tracking purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Support</h2>
              <p>
                For refund inquiries, please contact: support@smartpay.in
              </p>
            </section>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
