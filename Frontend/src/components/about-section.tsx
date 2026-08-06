'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Eye } from 'lucide-react'

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main About */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Neoplas Fintech
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              We are Neoplas Fintech—The World of Fintech. Our vision is to assist in providing every underserved segment of the population access to financial services.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We understand consumer needs and provide services tailored to their lifestyle. We're building an unparalleled platform that brings financial services to your doorstep, regardless of your location.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold cursor-pointer"
            >
              Download App
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-20 blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 min-h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  500K+
                </div>
                <p className="text-lg text-muted-foreground">Active Users Worldwide</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Customer First',
                description: 'Customers are at the center of everything we do',
              },
              {
                icon: Eye,
                title: 'Transparency',
                description: 'No small print, completely transparent about our decisions',
              },
              {
                icon: Target,
                title: 'Trust',
                description: 'We keep every promise we make to you',
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500K+', label: 'Active Agents' },
            { number: '5X', label: 'Business Expansion' },
            { number: '21M', label: 'Monthly Services' },
            { number: '10K+', label: 'Pin Codes Covered' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
