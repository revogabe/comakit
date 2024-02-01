import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../css/globals.css'
import { Header } from '@/components/header'
import { HeroOverlay } from '@/components/hero-overlay'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Comakit UI',
  description:
    'Comakit UI is a React component library that helps you build accessible, production-ready websites and applications.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative h-screen min-h-screen w-screen overflow-x-hidden overflow-y-scroll`}
      >
        <Header />
        <div className="w-full pt-14">
          {children}
          <HeroOverlay />
        </div>
      </body>
    </html>
  )
}
