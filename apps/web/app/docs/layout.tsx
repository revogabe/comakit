import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../css/globals.css'
import { Sidebar } from '@/components/sidebar'

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
    <div className="relative flex h-full">
      <Sidebar />
      <div className="ml-40 h-screen w-full">{children}</div>
    </div>
  )
}
