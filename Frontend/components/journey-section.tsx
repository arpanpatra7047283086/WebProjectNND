'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const milestones = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'Digital Seva Kendra Service launched in Delhi NCR, Mumbai, and Bengaluru',
  },
  {
    year: '2019',
    title: 'Series A Funding',
    description: 'Received $9M in pre-series funding with agent network growing to 32k',
  },
  {
    year: '2020',
    title: 'Market Leadership',
    description: 'Surpassed the third-largest company in the fintech market',
  },
  {
    year: '2021',
    title: 'PAN India Expansion',
    description: 'PAN India operations began with 25,000 Direct Business Outlets',
  },
  {
    year: '2023',
    title: 'Innovation Focus',
    description: 'Launched advanced mobile wallet in accordance with RBI guidelines',
  },
  {
    year: '2024',
    title: 'Global Growth',
    description: 'Expanding internationally with 500K+ active users worldwide',
  },
]

export function JourneySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startup to market leader in fintech services
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-cyan-500 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
          />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1 md:flex md:justify-end">
                  <motion.div
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow max-w-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0"
                      >
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      </motion.div>
                      <div className="flex-1">
                        <span className="inline-block text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="flex justify-center"
                  whileInView={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white hidden md:block shadow-md"></div>
                </motion.div>

                {/* Spacer for layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <motion.div
            className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-cyan-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
          />
        </div>
      </div>
    </section>
  )
}
