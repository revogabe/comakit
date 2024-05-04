import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../css/globals.css'
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
      <body className={`${inter.className}  h-screen overflow-x-hidden`}>{children}</body>
    </html>
  )
}
