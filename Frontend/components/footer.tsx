'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Code2, LinkIcon, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
        { label: 'Mobile Recharge', href: '/services/mobile-recharge' },
        { label: 'Bill Payments', href: '/services/bill-payments' },
        { label: 'Investments', href: '/services/investments' },
        { label: 'Insurance', href: '/services/insurance' },
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
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <motion.div
          className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 rounded-2xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-2 text-foreground">Stay Updated</h3>
              <p className="text-muted-foreground">Get the latest fintech updates and offers directly to your inbox.</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
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
            <div className="mb-4">
              <div className="inline-flex bg-white rounded-lg px-3 py-2 shadow-sm ring-1 ring-primary/20">
                <Image
                  src="/esmartpay-logo.png"
                  alt="Neoplas Fintech logo"
                  width={170}
                  height={44}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
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
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
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
              <h4 className="text-lg font-bold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors flex items-center gap-1"
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
            <h4 className="text-lg font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:support@neoplasfintech.in"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground">support@neoplasfintech.in</p>
                </div>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="text-xs text-muted-foreground">+91 98765 43210</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Address</p>
                  <p className="text-xs text-muted-foreground">New Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-border my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            © 2024 Neoplas Fintech Private Limited. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors font-medium">
              Sitemap
            </a>
            <a href="#" className="hover:text-primary transition-colors font-medium">
              Accessibility
            </a>
            <a href="#" className="hover:text-primary transition-colors font-medium">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Top Footer Accent */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
    </footer>
  )
}
