'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from '@/components/app-link'
import Image from '@/components/app-image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Use useEffect to add and remove scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled
          ? 'bg-background/80 border-b border-primary/30 shadow-lg shadow-primary/5'
          : 'bg-background/60 border-b border-border'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Link href="/" className="flex items-center gap-2" aria-label="Neoplas Fintech home">
              <div className="bg-white rounded-lg px-3 py-2 flex items-center shadow-sm ring-1 ring-primary/20">
                <Image
                  src="/esmartpay-logo.png"
                  alt="Neoplas Fintech logo"
                  width={150}
                  height={40}
                  priority
                  className="h-8 w-auto object-contain"
                />
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
                  className="px-4 py-2 text-foreground/80 font-medium text-sm relative group hover:text-primary transition-colors"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
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
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Login Button (Desktop Only) */}
            <Link href="https://esmartpay.in/login">
              <motion.button
                className="hidden sm:inline-flex px-6 py-2.5 border-2 border-primary text-primary rounded-lg font-semibold text-sm hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            </Link>
            
            {/* Get Started Button (Desktop Only) */}
            <Link href="/contact">
              <motion.button
                className="hidden sm:inline-flex px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-2 pb-6">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-foreground font-medium text-sm hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            
            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-2 mt-4 pt-2 border-t border-border/50">
              {/* Mobile Login Button */}
              <Link href="https://esmartpay.in/login">
                <motion.button
                  className="w-full px-4 py-3 border-2 border-primary text-primary rounded-lg font-semibold text-sm cursor-pointer hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </motion.button>
              </Link>
              
              {/* Mobile Get Started Button */}
              <Link href="/contact">
                <motion.button
                  className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
