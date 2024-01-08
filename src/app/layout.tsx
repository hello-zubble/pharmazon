import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const DM = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pharmazon',
  description: 'Stay at Home, Consult Online, Get Medicines Delivered at Doorstep',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={DM.className}>
        <Navbar />
        <main className='bg-white'>
          {children}
        </main>
        <Footer/>
      </body>
    </html >
  )
}
