'use client'

import { Button, NavLink } from '@/comakit'
import { cn } from '@/utils/cn'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { FaHeart } from 'react-icons/fa'

export const Header = () => {
  const [scroll, setScroll] = React.useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScroll(latest)
  })

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 0,
        width: '100%',
      }}
      animate={{
        opacity: 1,
        y: scroll < 100 ? 0 : 18,
        width: scroll < 100 ? '100%' : '96%',
      }}
      transition={{
        type: 'spring',
        stiffness: 640,
        damping: 64,
      }}
      className={cn(
        'fixed inset-x-0 z-50 mx-auto flex h-14 w-full max-w-[1440px]  items-center justify-between rounded-xl border border-transparent duration-300 ease-out',
        {
          'bg-background/80 backdrop-blur border-border/50 w-[96%]': scroll >= 100,
        },
      )}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-4">
        <div className="hidden shrink-0 items-center justify-center gap-2.5 md:flex">
          <Image width={240} height={240} className="h-6 w-6 shrink-0" src="/comakit.png" alt="" />
          <h2 className="">
            Comakit <span className="text-primary-border">UI</span>
          </h2>
        </div>

        <div className="flex items-center justify-center gap-6">
          <NavLink
            variant="secondary"
            className="text-muted-foreground hover:text-foreground text-sm font-medium duration-200 ease-out"
            href="http://docs.localhost:3000/installation"
          >
            Docs
          </NavLink>
          <NavLink
            variant="secondary"
            className="text-muted-foreground hover:text-foreground text-sm font-medium duration-200 ease-out"
            href="/blog"
          >
            Roadmap
          </NavLink>
          <NavLink
            variant="secondary"
            className="text-muted-foreground hover:text-foreground  text-sm font-medium  duration-200 ease-out"
            href="/contributors"
          >
            Contributors
          </NavLink>
          <NavLink
            variant="secondary"
            className="text-muted-foreground hover:text-foreground pointer-events-none hidden text-sm font-medium opacity-25 duration-200 ease-out sm:flex"
            href="/themes"
          >
            Themes
          </NavLink>
        </div>

        <div className=" shrink-0 items-center justify-end gap-6 ">
          <Button
            className="duration-300 ease-out"
            variant={scroll >= 100 ? 'primary' : 'secondary'}
            size="sm"
          >
            {scroll < 100 && <FaHeart />}
            {scroll >= 100 ? 'Get Started' : 'Sponsor'}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
