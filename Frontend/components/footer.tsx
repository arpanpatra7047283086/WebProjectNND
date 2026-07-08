'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Code2, LinkIcon, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const socialLinks = [
    { Icon: Send, href: '#', label: 'Send' },
    { Icon: Code2, href: '#', label: 'Code' },
    { Icon: LinkIcon, href: '#', label: 'Link' },
    { Icon: Heart, href: '#', label: 'Heart' },
  ]

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Mobile Recharge', href: '/services' },
        { label: 'Bill Payments', href: '/services' },
        { label: 'Investments', href: '/services' },
        { label: 'Insurance', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Become an Agent', href: '/solutions' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms-and-conditions' },
        { label: 'Refund Policy', href: '/refund-policy' },
        { label: 'Security', href: '/security' },
      ],
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 border-t-4 border-cyan-400/40">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border-2 border-cyan-400/40 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          animate={{ boxShadow: ["0 0 30px rgba(34, 211, 238, 0.2)", "0 0 50px rgba(59, 130, 246, 0.3)", "0 0 30px rgba(34, 211, 238, 0.2)"] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Stay Updated</h3>
              <p className="text-cyan-100/80 font-medium">Get the latest fintech updates and offers directly to your inbox.</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border-2 border-cyan-400/50 rounded-lg text-cyan-100 placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 backdrop-blur-sm"
              />
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/60 transition-all"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-blue-500/50"
                animate={{ boxShadow: ["0 0 20px rgba(34, 211, 238, 0.5)", "0 0 30px rgba(59, 130, 246, 0.5)", "0 0 20px rgba(34, 211, 238, 0.5)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ₹
              </motion.div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">eSmartPay</h3>
                <p className="text-xs text-cyan-300/70 font-bold">Your Financial Freedom</p>
              </div>
            </div>
            <p className="text-cyan-100/80 text-sm leading-relaxed mb-6 font-medium">
              Your trusted partner for all financial services. Making fintech accessible to everyone in India.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.Icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    title={social.label}
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-500 hover:text-white transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h4 className="text-lg font-black text-cyan-300 mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-cyan-100/80 hover:text-cyan-300 text-sm font-semibold transition-colors flex items-center gap-1"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-black text-cyan-300 mb-4">Contact</h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:support@esmartpay.com"
                className="flex items-start gap-3 text-cyan-100/80 hover:text-cyan-300 transition-colors group"
                whileHover={{ x: 4 }}
              >
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-bold text-cyan-300">Email</p>
                  <p className="text-xs text-cyan-100/60">support@esmartpay.com</p>
                </div>
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-cyan-100/80 hover:text-cyan-300 transition-colors group"
                whileHover={{ x: 4 }}
              >
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-bold text-cyan-300">Phone</p>
                  <p className="text-xs text-cyan-100/60">+91 98765 43210</p>
                </div>
              </motion.a>
              <motion.div 
                className="flex items-start gap-3 text-cyan-100/80"
                whileHover={{ x: 4 }}
              >
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-bold text-cyan-300">Address</p>
                  <p className="text-xs text-cyan-100/60">New Delhi, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t-2 border-cyan-400/30 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cyan-100/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold">
            © 2024 <span className="text-cyan-300 font-bold">eSmartPay</span>. All Rights Reserved. | ISHMART TECHNOGLOBAL SERVICES PRIVATE LIMITED
          </p>
          <div className="flex gap-6">
            <motion.a href="#" className="hover:text-cyan-300 transition-colors font-bold" whileHover={{ scale: 1.05 }}>
              Sitemap
            </motion.a>
            <motion.a href="#" className="hover:text-cyan-300 transition-colors font-bold" whileHover={{ scale: 1.05 }}>
              Accessibility
            </motion.a>
            <motion.a href="#" className="hover:text-cyan-300 transition-colors font-bold" whileHover={{ scale: 1.05 }}>
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Top Footer Accent */}
      <motion.div 
        className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
        animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </footer>
  )
}
