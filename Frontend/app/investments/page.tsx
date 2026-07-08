'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'

export default function InvestmentsPage() {
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
                <span className="text-sm font-semibold text-primary">Investments</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
                Grow Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Wealth</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Smart investment options in mutual funds, stocks, fixed deposits, and more. Start investing with as low as ₹1.
              </p>
              <div className="flex gap-4 flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  Start Investing <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="hidden md:flex justify-center"
            >
              <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-primary opacity-20" />
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
            <h2 className="text-4xl font-bold mb-4">Investment Products</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Mutual Funds', desc: 'Diversified portfolio options for all risk profiles' },
              { title: 'Stocks', desc: 'Trade stocks in India&apos;s largest companies' },
              { title: 'Fixed Deposits', desc: 'Secure returns with guaranteed interest' },
              { title: 'Gold', desc: 'Invest in digital gold with no storage hassles' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
