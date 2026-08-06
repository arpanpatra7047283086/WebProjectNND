'use client'

import { motion } from 'framer-motion'
import { Zap, Code, Headphones, Package } from 'lucide-react'

const solutions = [
  {
    icon: Package,
    title: 'All-in-One Solution',
    description: 'Our staff will assist you in smoothly completing the digital transformation process. From consultation through UI/UX, and from development to ongoing maintenance.',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Readable and extendable by developers besides the original author. Readability, changeability, extensibility, and maintainability follow comprehension.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer service is best in class and committed to serve you 24x7 for your queries and questions.',
  },
  {
    icon: Zap,
    title: 'Easy Integration',
    description: 'Easy integration for your online and mobile applications lets you sign up and go. Simple onboarding process.',
  },
]

export function SolutionsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            First Class Business Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The primary objective of the business is to serve the demands and wants of our customers
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 30px 50px -12px rgba(0, 102, 255, 0.15)',
                }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-500/0 group-hover:from-blue-600/5 group-hover:to-cyan-500/5 transition-all duration-300"
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="inline-block mb-4"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Arrow indicator */}
                  <motion.div
                    className="mt-6 flex items-center text-blue-600 font-semibold text-sm"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <motion.span className="ml-2">→</motion.span>
                  </motion.div>
                </div>

                {/* Border animation on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-blue-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-lg mb-6">
            Ready to transform your business?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
