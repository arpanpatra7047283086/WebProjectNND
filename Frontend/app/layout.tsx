import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const _spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Neoplas Fintech - Smart Fintech Solutions That Actually Work',
  description: 'All-in-one fintech platform for recharges, bill payments, investments, insurance, and banking services',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#070b09',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth bg-background ${_spaceGrotesk.variable} ${_inter.variable}`}>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
