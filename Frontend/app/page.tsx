'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Smartphone, CreditCard, TrendingUp, Shield, ArrowRight, CheckCircle2, Zap, Layers, Code2, Phone, ThumbsUp, Award, Handshake, Users, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Recharge',
    description: 'Instant mobile and DTH recharges',
    href: '/services'
  },
  {
    icon: CreditCard,
    title: 'Bill Payments',
    description: 'Pay all bills in one place',
    href: '/services'
  },
  {
    icon: TrendingUp,
    title: 'Investments',
    description: 'Smart investment options',
    href: '/services'
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Affordable insurance plans',
    href: '/services'
  },
]

const features = [
  {
    icon: CheckCircle2,
    title: 'Outstanding Service',
    description: 'Best-in-class customer support available 24/7'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Safe and secure banking experience'
  },
  {
    icon: Zap,
    title: 'Seamless',
    description: 'One app for all financial needs'
  },
  {
    icon: TrendingUp,
    title: 'Transparent',
    description: 'No hidden fees, complete transparency'
  },
]

const solutions = [
  {
    icon: Layers,
    title: 'All-in-one solution',
    description: 'Our staff will assist you in smoothly completing the digital transformation process. Tell us your concept simply. From consultation through UI/UX, and from development to ongoing maintenance, we will proceed step-by-step together.'
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'If everyone on the team can easily understand the code, it is clean. Clean code is readable and extendable by developers besides the original author. Readability, changeability, extensibility, and maintainability follow comprehension.'
  },
  {
    icon: Phone,
    title: '24X7 Support',
    description: 'Our customer service is best in class and committed to serve you 24x7 for your queries and questions.'
  },
  {
    icon: ThumbsUp,
    title: 'Easy Integration',
    description: 'Easy integration for your online and mobile applications lets you sign up and go.'
  },
]

const values = [
  {
    icon: Award,
    title: 'Integrity',
    description: 'We support being honest in all of our dealings.'
  },
  {
    icon: Handshake,
    title: 'Trust',
    description: 'The promises we made to you are kept.'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Customers are at the center of all we do.'
  },
  {
    icon: BarChart3,
    title: 'Transparency',
    description: 'We take pride in being completely transparent about our opinions and decisions.'
  },
]

const partners = [
  { name: 'Razorpay', src: '/partners/cp1.jpeg', href: 'https://razorpay.com' },
  { name: 'Cashfree Payments', src: '/partners/cp2.jpeg', href: 'https://www.cashfree.com' },
  { name: 'Fino Payments Bank', src: '/partners/cp3.jpeg', href: 'https://www.finobank.com' },
  { name: 'K1 Pay India', src: '/partners/cp5.jpeg', href: 'https://www.k1payindia.com' },
  { name: 'PaySprint', src: '/partners/cp6.jpeg', href: 'https://paysprint.in' },
  { name: 'Kotak', src: '/partners/cp7.jpeg', href: 'https://www.kotak.com' },
  { name: 'IDFC FIRST Bank', src: '/partners/cp8.jpeg', href: 'https://www.idfcfirstbank.com' },
  { name: 'PayU', src: '/partners/cp9.jpeg', href: 'https://payu.in' },
  { name: 'Toshani', src: '/partners/cp10.jpeg', href: 'https://www.toshani.co.in' },
  { name: 'Pay2ALL Services Pvt Ltd', src: '/partners/cp11.jpeg', href: 'https://www.pay2all.in' },
  { name: 'Book Nearby', src: '/partners/cp12.jpeg', href: 'https://www.booknearbys.com' },
]

const journeyMilestones = [
  { year: '2018', title: 'Founded', description: 'eSmartPay founded with a vision to revolutionize fintech in India.' },
  { year: '2019', title: 'Expansion', description: 'Expanded services across major cities in India.' },
  { year: '2021', title: 'Growth', description: 'PAN India operations began in April 2021. The Network or retailers now includes 25,000 Direct Business Outlets (Agent).' },
  { year: '2023', title: 'Innovation', description: 'Launched innovative financial products and solutions.' },
  { year: '2024', title: 'Leading Platform', description: 'Became the leading fintech platform with 500K+ users.' },
]

export default function HomePage() {
  const [journeyIndex, setJourneyIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    option: '',
    address: '',
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <span className="text-sm font-semibold text-primary">Revolutionizing Fintech in India</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl sm:text-6xl font-bold leading-tight mb-6"
              >
                Your Complete Financial <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Platform</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Access recharges, bill payments, investments, insurance, and banking services all in one secure platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex gap-4 flex-wrap"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary text-white font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex gap-8"
              >
                {[
                  { number: '500K+', label: 'Users' },
                  { number: '25K+', label: 'Outlets' },
                  { number: '21M+', label: 'Services' },
                ].map((stat, i) => (
                  <div key={i}>
                    <h3 className="text-3xl font-bold text-primary">{stat.number}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden md:flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-full max-w-md"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
                <div className="relative bg-card border border-border rounded-3xl p-8 backdrop-blur-sm">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold">Fast & Secure</p>
                          <p className="text-xs text-muted-foreground">Your transactions protected</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for financial management in one platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={service.href}>
                    <div className="group bg-card border border-border rounded-xl p-8 h-full cursor-pointer hover:shadow-lg hover:border-primary/50 transition-all">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4"
                      >
                        <Icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                      <div className="mt-4 flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                        Learn more <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose eSmartPay?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of users across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/30 to-primary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-sm font-semibold text-blue-100 mb-2">Together, let's grow your business</p>
            <h2 className="text-4xl font-bold text-white mb-4">First class business solutions</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              The primary objective of the business is to serve the demands and wants of our customers. For the benefit of our consumers, we offer a variety of services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center mb-6"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-white/80 leading-relaxed">{solution.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Core principles that drive everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-14 h-14 rounded-lg bg-primary/30 flex items-center justify-center mb-4"
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/30 to-primary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Journey</h2>
            <p className="text-white/80">Our milestones and achievements</p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={journeyIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12 text-center"
            >
              <div className="mb-4">
                <span className="text-5xl font-bold text-blue-300">{journeyMilestones[journeyIndex].year}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">{journeyMilestones[journeyIndex].title}</h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">{journeyMilestones[journeyIndex].description}</p>
            </motion.div>

            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setJourneyIndex((prev) => (prev - 1 + journeyMilestones.length) % journeyMilestones.length)}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setJourneyIndex((prev) => (prev + 1) % journeyMilestones.length)}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {journeyMilestones.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setJourneyIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === journeyIndex ? 'bg-white w-8' : 'bg-white/40 w-2'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2">To get started, provide us with your details</h2>
            <p className="text-muted-foreground">Join thousands of users and start your journey with us</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleFormSubmit}
            className="bg-card border border-border rounded-xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Enter Your Email Id"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="Enter Your Phone Number"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-semibold mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleFormChange}
                  placeholder="City"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-semibold mb-2">Select Option</label>
              <select
                name="option"
                value={formData.option}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="">Please Choose an Option</option>
                <option value="agent">Become an Agent</option>
                <option value="partner">Business Partner</option>
                <option value="customer">Customer</option>
              </select>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-semibold mb-2">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleFormChange}
                placeholder="Address"
                rows={4}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Corporate Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 rounded-full bg-gradient-to-r from-purple-600/10 to-rose-600/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-purple-700">
              Our Network
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
              Corporate Partners
            </h2>
            <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-rose-600" />
            <p className="text-lg text-slate-500 max-w-2xl mx-auto text-pretty">
              Trusted by leading financial institutions and payment providers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {partners.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index % 4) * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group flex items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 h-32 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:border-slate-200"
              >
                <img
                  src={partner.src || '/placeholder.svg'}
                  alt={`${partner.name} logo`}
                  className="max-h-16 w-auto max-w-full object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  loading="lazy"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Ready to Transform Your Finances?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-8"
          >
            Join thousands of users who have simplified their financial life with eSmartPay
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all"
              >
                Get Started Today
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/5 transition-all"
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
