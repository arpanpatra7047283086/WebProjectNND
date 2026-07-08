'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const mobileMenuItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Mobile Recharge', href: '/services' },
    { label: 'Bill Payments', href: '/services' },
    { label: 'Investments', href: '/services' },
    { label: 'Insurance', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled
          ? 'bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 border-b-2 border-cyan-400/40 shadow-2xl shadow-blue-900/50'
          : 'bg-gradient-to-r from-slate-900/90 via-blue-900/90 to-slate-900/90 border-b-2 border-cyan-400/20 shadow-xl shadow-blue-900/30'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50 relative"
                animate={{ boxShadow: ["0 0 20px rgba(34, 211, 238, 0.5)", "0 0 30px rgba(59, 130, 246, 0.5)", "0 0 20px rgba(168, 85, 247, 0.5)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white font-black text-2xl">₹</span>
              </motion.div>
              <div className="hidden sm:flex flex-col">
                <motion.span 
                  className="text-xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  eSmartPay
                </motion.span>
                <span className="text-xs text-cyan-300/80 font-semibold">Your Financial Freedom</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-cyan-100 font-semibold text-sm relative group hover:text-cyan-300 transition-all"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link href="/contact">
              <motion.button
                className="hidden sm:inline-flex px-6 py-2.5 font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/40 transition-all bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-xl hover:shadow-cyan-500/60"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 hover:bg-cyan-500/20 rounded-lg transition-all border border-cyan-400/30"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-cyan-300" />
              ) : (
                <Menu className="w-6 h-6 text-cyan-300" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="lg:hidden overflow-hidden bg-gradient-to-b from-slate-900 to-blue-900 border-t-2 border-cyan-400/30"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-2">
            {mobileMenuItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-cyan-100 font-semibold text-sm hover:bg-cyan-500/20 rounded-lg transition-all border border-transparent hover:border-cyan-400/30"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Link href="/contact">
              <motion.button
                className="w-full mt-2 px-4 py-3 font-bold text-sm rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/40"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
