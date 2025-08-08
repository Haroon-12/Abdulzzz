import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdulzzz Services Hub - Custom Sublimation & Printing Services',
  description: 'Professional sublimation printing services in Mirpur, Pakistan. Custom flags, pillows, mugs, keychains, school bags, and more. Contact us for personalized items.',
  keywords: 'sublimation, custom printing, personalized items, flags, pillows, mugs, keychains, school bags, Mirpur, Pakistan',
  authors: [{ name: 'Abdulzzz Services Hub' }],
  openGraph: {
    title: 'Abdulzzz Services Hub',
    description: 'Professional sublimation printing services in Mirpur, Pakistan',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}
