'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, DollarSign, Users, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const jobPositions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'New Delhi, India',
    type: 'Full-time',
    description: 'We are looking for an experienced full-stack developer to join our team.',
    experience: '5+ years',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'New Delhi, India',
    type: 'Full-time',
    description: 'Lead the vision and strategy for our fintech products.',
    experience: '3+ years',
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'New Delhi, India',
    type: 'Full-time',
    description: 'Build and maintain our cloud infrastructure and deployment systems.',
    experience: '4+ years',
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'New Delhi, India',
    type: 'Full-time',
    description: 'Drive growth and brand awareness for eSmartPay.',
    experience: '2+ years',
  },
  {
    title: 'Customer Success Manager',
    department: 'Support',
    location: 'New Delhi, India',
    type: 'Full-time',
    description: 'Ensure our customers achieve their goals with our platform.',
    experience: '2+ years',
  },
  {
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'New Delhi, India',
    type: 'Full-time',
    description: 'Extract insights from our data to drive decision-making.',
    experience: '3+ years',
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Industry-competitive compensation packages',
  },
  {
    icon: Users,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs',
  },
  {
    icon: Briefcase,
    title: 'Career Growth',
    description: 'Professional development and growth opportunities',
  },
  {
    icon: CheckCircle2,
    title: 'Work-Life Balance',
    description: 'Flexible working hours and remote options',
  },
]

const values = [
  'Innovation drives everything we do',
  'We prioritize customer success above all',
  'Integrity and transparency in every interaction',
  'Diversity and inclusion are fundamental',
  'Continuous learning and improvement',
  'Collaborative team environment',
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Build the Future of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Fintech</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Join our team and help us revolutionize financial services in India. We're looking for talented individuals who are passionate about innovation and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Join eSmartPay?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer competitive benefits and a great workplace culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-blue-100 text-lg">
              These principles guide how we work and who we hire
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <p className="text-white font-medium">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Check out our current job openings and join our growing team
            </p>
          </motion.div>

          <div className="grid gap-6">
            {jobPositions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-slate-600 mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm">{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm bg-blue-100 text-primary px-3 py-1 rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-600">{job.description}</p>
                    <p className="text-sm text-muted-foreground mt-2">Experience: {job.experience}</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact">
                      <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap">
                        Apply Now <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Don&apos;t see your role?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Send us your resume and let us know why you&apos;d be a great fit at eSmartPay
            </p>
            <motion.a
              href="mailto:careers@esmartpay.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Send Your Resume <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
