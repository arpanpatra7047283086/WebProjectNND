'use client'

import { Navbar } from '@/components/navbar'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { ShieldCheck, FileText, Gavel, BookOpen, Scale, History, Terminal, Target, ShieldAlert, AlertCircle, Info, ChevronRight, AlertTriangle } from 'lucide-react'

const partners = [
  { name: 'Razorpay', src: '/partners/cp1.jpeg' },
  { name: 'Cashfree Payments', src: '/partners/cp2.jpeg' },
  { name: 'Fino Payments Bank', src: '/partners/cp3.jpeg' },
  { name: 'K1 Pay India', src: '/partners/cp5.jpeg' },
  { name: 'PaySprint', src: '/partners/cp6.jpeg' },
  { name: 'Kotak', src: '/partners/cp7.jpeg' },
  { name: 'IDFC FIRST Bank', src: '/partners/cp8.jpeg' },
  { name: 'PayU', src: '/partners/cp9.jpeg' },
  { name: 'Toshani', src: '/partners/cp10.jpeg' },
  { name: 'Pay2ALL Services Pvt Ltd', src: '/partners/cp11.jpeg' },
  { name: 'Book Nearby', src: '/partners/cp12.jpeg' },
]

const sections = [
  { id: 'definitions', label: 'Definitions', icon: BookOpen },
  { id: 'scope', label: 'Scope of Services', icon: Target },
  { id: 'ip', label: 'Intellectual Property', icon: ShieldCheck },
  { id: 'payment', label: 'Payment Mechanism', icon: Scale },
  { id: 'settlement', label: 'Settlement', icon: History },
  { id: 'obligations', label: 'Obligations', icon: Terminal },
  { id: 'liability', label: 'Liability & Indemnity', icon: AlertCircle },
  { id: 'fraud', label: 'Fraud & Anti-Bribery', icon: ShieldAlert },
  { id: 'termination', label: 'Termination', icon: Gavel },
];

export default function TermsAndConditions() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // The offset is handled by scroll-margin-top in globals.css
      // or directly on the elements.
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };





  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="relative flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10"></div>
          <div className="absolute -top-20 right-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10"></div>
          <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 -z-10"></div>
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10"></div>
        </div>


        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-sm font-bold text-primary mb-6 border border-primary/20 shadow-sm"
            >
              <FileText className="h-4 w-4" />
              Service Level Agreement
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-slate-900">
              Terms and <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Conditions</span>
            </h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Standard operating procedures and legal framework governing the partnership between ISHMART and its valued Sub-Users.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-12 items-start">
            {/* Table of Contents / Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block lg:col-span-1"
            >
              <div className="sticky top-32 space-y-6">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                  <h3 className="font-black text-slate-900 text-lg mb-6 flex items-center gap-3">
                    <Gavel className="w-5 h-5 text-primary" /> Navigation
                  </h3>
                  <nav className="flex flex-col gap-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="group flex items-center justify-between text-left text-sm font-bold text-slate-500 hover:text-primary transition-all py-3 border-l-4 border-transparent hover:border-primary pl-4 hover:bg-primary/5 rounded-r-2xl"
                      >
                        <span className="flex items-center gap-3">
                          <section.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          {section.label}
                        </span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/30 transition-colors" />
                  <ShieldAlert className="w-12 h-12 mb-6 text-primary" />
                  <p className="text-lg font-black mb-3">Legal Assistance</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">Need clarification on specific clauses? Our legal department is ready to assist you.</p>
                  <a
                    href="mailto:legal@esmartpay.in"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-slate-900 rounded-xl font-black text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Contact Legal                  </a>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3 space-y-12"
            >
              {/* Introduction Card */}
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Info className="w-40 h-44" />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 border-l-8 border-l-primary">
                    <p className="font-black text-slate-900 text-xl leading-relaxed mb-0 italic">
                      "This Sub-User Service Agreement is made between <span className="text-primary underline decoration-primary/20">ISHMART TECHNOGLOBAL SERVICES PRIVATE LIMITED</span> and the <span className="text-primary underline decoration-primary/20">SUB-USER</span> as identified in the registration data."
                    </p>
                  </div>

                  <div className="prose prose-slate max-w-none text-slate-600 leading-loose text-justify text-lg space-y-6">
                    <p>
                      <strong>WHEREAS</strong> the USER is a private limited incorporated under the Companies Act, 1956, having its registered office at 3556, GALI NO 09, REGHAR PURA KAROL BAGH, CENTRAL DELHI, DELHI, INDIA, 10005. The USER is an authorized facilitator for receiving and delivering small value remittances through Aadhar-based payments and other payment instruments.
                    </p>
                    <p>
                      <strong>WHEREAS</strong> the USER is a neo-banking platform delivering full-stack banking services to individuals and businesses of all sizes.
                    </p>
                    <p>
                      The Client has approached ISHMART TECHNOGLOBAL SERVICES PRIVATE LIMITED (collectively referred to as “ISHMART”) to avail Services to enable Customers to make payments to the Client and ISHMART has agreed to provide Services in accordance with these terms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Definitions Section */}
              <motion.section
                id="definitions"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 scroll-mt-36"
              >
                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-5"><span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black shadow-inner">01</span>Certain Definitions</h2>
                <div className="grid gap-4 md:pl-16">
                  {[
                    { term: "Agreement", desc: "Includes this agreement, all its schedules, amendments made from time to time, and all related documents." },
                    { term: "Applicable Law", desc: "Includes all applicable Indian statutes, enactments, acts, laws, ordinances, rules, and regulations." },
                    { term: "Chargebacks", desc: "Reversal of any transaction made by Service Provider’s Subscriber due to forgery, duplicate processing, or fraudulent use." },
                    { term: "Customer(s)", desc: "Persons or entities availing services through the SUB-USER using USER’s products." },
                    { term: "Compliance", desc: "Regulatory requirements, ethical practices, KYC, and AML finance regulations." },
                    { term: "Effective Date", desc: "The date of signing or acceptance of this Agreement by the Parties." },
                    { term: "Intellectual Property", desc: "Software, code, trademarks, service marks, logos, and all depictions or representations thereof." },
                    { term: "Product", desc: "Set of services permitting money transfer, POS, Mobile Apps, and value-added services." },
                    { term: "Force Majeure", desc: "Accidents, acts of war, catastrophes, or significant adverse events beyond control." },
                    { term: "Fraud", desc: "Theft or falsification of identity, accounts, credentials, or actual events." },
                    { term: "Software", desc: "Custom-built software owned by ISHMART or licensed from third-party suppliers." },
                    { term: "Sub-Users", desc: "Individuals or entities appointed by the User to facilitate Products disbursement." }
                  ].map((def) => (
                    <div key={def.term} className="group p-5 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 flex flex-col md:flex-row md:items-start gap-4">
                      <div className="md:w-1/3 shrink-0">
                        <span className="inline-block px-3 py-1 bg-primary/5 text-primary rounded-lg text-sm font-black mb-2 md:mb-0 uppercase tracking-wider">
                          {def.term}
                        </span>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-slate-600 text-sm leading-relaxed">{def.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Scope of Services */}
              <motion.section
                id="scope"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 scroll-mt-36"
              >
                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-5"><span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black shadow-inner">02</span>Scope of Services</h2>
                <div className="space-y-6 md:pl-16 text-slate-600 leading-loose text-lg">
                  <p>The USER hereby agrees to facilitate the services of ISHMART to the SUB-USER and the SUB-USER hereby agrees to avail the Services. The SUB-USER will not undertake any activity that violates any provision of law.</p>
                  <div className="p-8 bg-accent/5 rounded-3xl border border-accent/20 flex gap-6 items-start">
                    <Target className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <p className="text-slate-800 font-bold italic leading-relaxed">
                      "The SUB-USER shall primarily act as a conduit for receiving and delivering small value remittances through Aadhar-based payments and other agreed payment instruments."
                    </p>
                  </div>
                  <p>The SUB-USER agrees to perform all roles, responsibilities, and functions specified. USER reserves the right to vary the Services with written advice, which becomes effective immediately.</p>
                </div>
              </motion.section>

              {/* Intellectual Property */}
              <motion.section
                id="ip"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 scroll-mt-36"
              >
                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-5"><span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black shadow-inner">03</span>Intellectual Property</h2>
                <div className="space-y-6 md:pl-16 text-slate-600 leading-loose text-lg">
                  <p>All intellectual property rights to Technology and Copyrights remain the property of <span className="text-slate-900 font-black">ISHMART</span>. Trademarks belong exclusively to ISHMART.</p>
                  <p>The SUB-USER agrees not to sell, license, distribute, copy, modify, or create derivative works from the Materials or ISHMART’s IP. Reverse engineering or disassembling any part of the software is strictly prohibited.</p>
                </div>
              </motion.section>

              {/* Payment Mechanism */}
              <motion.section
                id="payment"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 scroll-mt-36"
              >
                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-5"><span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black shadow-inner">04</span>Payment Mechanism</h2>
                <div className="space-y-6 md:pl-16 text-slate-600 leading-loose text-lg">
                  <p>All payments and settlements between the parties shall be made in accordance with the <strong>Schedule of Charges</strong>. This schedule fluctuates based on market conditions and will be updated at USER's sole discretion.</p>
                </div>
              </motion.section>

              {/* Settlement */}
              <motion.section
                id="settlement"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 scroll-mt-36"
              >
                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-5"><span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black shadow-inner">05</span>Settlement Process</h2>
                <div className="space-y-6 md:pl-16 text-slate-600 leading-loose text-lg">
                  <p>USER shall provide an electronic report (MIS) via an online portal containing transaction amounts, dates, and response codes. The SUB-USER must maintain a sufficient balance to enable smooth transaction processing.</p>
                  <p>In case of discrepancies, both parties will provide best efforts to settle through mutual investigation within <span className="text-slate-900 font-black underline decoration-primary decoration-2">30 working days</span>.</p>
                </div>
              </motion.section>

              {/* Obligations */}
              <motion.section
                id="obligations"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 scroll-mt-36"
              >
                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-5"><span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black shadow-inner">06</span>Sub-User Obligations</h2>
                <div className="space-y-6 md:pl-16 text-slate-600 leading-loose text-lg">
                  <p>The SUB-USER is solely liable for the acts of any further Sub-Users. It must manage cash on the field and ensure availability at outlets. The SUB-USER assumes all risks associated with cash handling at the ground level.</p>
                  <p>Sub-Users will not engage in any activity violating laws pertaining to <strong>gaming, gambling, or betting</strong>. Services will not be provided in Telangana, Odisha, and Assam for monies-based competitions.</p>
                </div>
              </motion.section>

              {/* Liability & Indemnity */}
              <motion.section
                id="liability"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 scroll-mt-36"
              >
                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-5"><span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black shadow-inner">07</span>Liability & Indemnity</h2>
                <div className="space-y-8 md:pl-16">
                  <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-2xl -mr-20 -mt-20" />
                    <div className="relative z-10 flex gap-6 items-start">
                      <AlertTriangle className="w-10 h-10 text-primary shrink-0" />
                      <div>
                        <p className="text-lg leading-relaxed opacity-90 italic mb-6">
                          "USER aggregate liability relating to Service(s) will not exceed one (1) month fees paid by SUB-USER for the specific Service(s) giving rise to the liability."
                        </p>
                        <p className="text-sm text-slate-400 uppercase tracking-widest font-black">Aggregate Liability Cap</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-loose text-lg">
                    The SUB-USER agrees to indemnify and hold USER harmless from any claims, recoveries, losses, or damages arising out of breach of terms or violation of any Applicable Laws.
                  </p>
                </div>
              </motion.section>

              {/* Fraud Section */}
              <motion.section
                id="fraud"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 scroll-mt-36"
              >
                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-5"><span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black shadow-inner">08</span>Fraud & Anti-Bribery</h2>
                <div className="space-y-6 md:pl-16 text-slate-600 leading-loose text-lg text-justify">
                  <p>You agree to comply with all applicable anti-bribery and anti-corruption laws. You will not offer, promise, or authorize anything of value to government officials or public servants for favorable action.</p>
                  <p>If a Fraudulent Transaction is reported, USER is entitled to suspend settlements during investigation. Liability for Fraudulent Transactions always rests with the Sub-User.</p>
                </div>
              </motion.section>

              {/* Termination Section */}
              <motion.section
                id="termination"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 scroll-mt-36"
              >
                <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-5"><span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black shadow-inner">09</span>Termination</h2>
                <div className="space-y-6 md:pl-16 text-slate-600 leading-loose text-lg">
                  <p>USER may suspend Services immediately for breach of Terms or upon instructions from governmental authorities. These Terms continue until terminated by either party. Termination does not relieve obligations incurred prior to the termination date.</p>
                </div>
              </motion.section>
            </motion.div>
          </div>
        </div>

        {/* Corporate Partners Section */}
        <div className="mt-32 border-t border-slate-200 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-sm font-black text-primary mb-6 shadow-sm"
              >
                <ShieldCheck className="h-4 w-4" />
                Trusted Network Partners
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Securing the Ecosystem</h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-500 text-lg">
                We partner with India's most secure financial institutions to protect your business and your customers.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative flex items-center justify-center p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-32"
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                    className="object-contain p-4 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
