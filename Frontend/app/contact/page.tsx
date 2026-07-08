'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, AlertCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
  name: string;
  email: string;
  phone: string;
  city: string;
  option: string;
  address: string;
  message: string;
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data); // In a real app, you'd send this data to a server
    setSubmitted(true)
    setTimeout(() => {
      reset();
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 (800) 123-4567',
      description: 'Mon-Fri 9am to 6pm'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'support@esmartpay.in',
      description: 'We&apos;ll respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Delhi NCR, Mumbai, Bangalore',
      description: 'Pan India Operations'
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Send us a Message</h2>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                <p className="text-muted-foreground">We&apos;ve received your message and will get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all ${errors.name ? 'border-red-500' : 'border-border'}`}
                      placeholder="Your name"
                    />
                    {errors.name && 
                      <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.name.message}
                      </span>
                    }
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
                      })}
                      className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all ${errors.email ? 'border-red-500' : 'border-border'}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && 
                      <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.email.message}
                      </span>
                    }
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      {...register("phone", { required: "Phone number is required" })}
                      className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all ${errors.phone ? 'border-red-500' : 'border-border'}`}
                      placeholder="+91 XXXXXXXXXX"
                    />
                    {errors.phone && 
                      <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.phone.message}
                      </span>
                    }
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2">City</label>
                    <input
                      type="text"
                      {...register("city", { required: "City is required" })}
                      className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all ${errors.city ? 'border-red-500' : 'border-border'}`}
                      placeholder="Your city"
                    />
                    {errors.city && 
                      <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.city.message}
                      </span>
                    }
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">What brings you here?</label>
                  <select
                    {...register("option", { required: "Please select an option" })}
                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all ${errors.option ? 'border-red-500' : 'border-border'}`}
                  >
                    <option value="">Please choose an option</option>
                    <option value="existing">Existing Agent</option>
                    <option value="interested">Interested to become an Agent</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="support">Customer Support</option>
                  </select>
                  {errors.option && 
                    <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.option.message}
                    </span>
                  }
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">Address</label>
                  <input
                    type="text"
                    {...register("address")}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                    placeholder="Your address"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none" 
                    placeholder="Tell us more about your inquiry..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  className="w-full px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:bg-primary/70"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {[
              {
                q: 'How quickly will I receive a response?',
                a: 'We aim to respond to all inquiries within 24 hours during business days.'
              },
              {
                q: 'What are the requirements to become an agent?',
                a: 'You need a smartphone, valid KYC documents, and a Pan India presence to become an eSmartPay agent.'
              },
              {
                q: 'Do you offer 24/7 customer support?',
                a: 'Yes, our customer support team is available 24/7 to assist you with any queries.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major payment methods including cards, UPI, net banking, and wallets.'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
