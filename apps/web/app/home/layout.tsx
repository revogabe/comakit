import { HeroOverlay } from '@/components/hero-overlay'
import { Header } from '@/components/header'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={` relative min-h-screen w-screen overflow-x-hidden overflow-y-scroll`}>
      <Header />
      <div className="w-full pt-14">
        {children}
        <HeroOverlay />
      </div>
    </div>
  )
}
