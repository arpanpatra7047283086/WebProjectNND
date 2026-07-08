'use client'

import { LegalPage } from '@/components/legal-page'
import { Receipt } from 'lucide-react'

export default function RefundPolicyPage() {
  return (
    <LegalPage
      icon={Receipt}
      badge="Fair & Transparent"
      title="Refund"
      highlight="Policy"
      intro="This policy outlines how refunds and reversals are handled for transactions made through the eSmartPay platform."
      lastUpdated="January 2024"
      sections={[
        {
          heading: 'General Principles',
          paragraphs: [
            'Most transactions processed through eSmartPay, such as recharges and bill payments, are completed instantly and are non-reversible once successful. Refunds apply primarily to failed or duplicate transactions.',
          ],
        },
        {
          heading: 'Failed Transactions',
          paragraphs: [
            'If an amount is debited but the service is not delivered, the amount is automatically reversed to the source account within the standard settlement window.',
          ],
          bullets: [
            'Wallet payments are typically refunded within 24 hours.',
            'Bank and card payments are refunded within 5 to 7 working days.',
            'Refund timelines may vary based on your bank or payment provider.',
          ],
        },
        {
          heading: 'Duplicate Payments',
          paragraphs: [
            'If you are charged more than once for the same transaction, the duplicate amount will be identified and refunded to your original payment method after verification.',
          ],
        },
        {
          heading: 'How to Request a Refund',
          bullets: [
            'Raise a request through the app or by emailing support@esmartpay.com.',
            'Provide the transaction ID, date, amount, and a brief description.',
            'Our team will investigate and respond within 30 working days.',
          ],
        },
        {
          heading: 'Non-Refundable Transactions',
          paragraphs: [
            'Successfully delivered services, convenience fees, and third-party charges are generally non-refundable unless required by applicable law.',
          ],
        },
      ]}
    />
  )
}
