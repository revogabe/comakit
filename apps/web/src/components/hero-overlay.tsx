'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export const HeroOverlay = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.1,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.8,
      }}
      className="absolute top-0 -z-10 mx-auto h-screen w-full overflow-hidden"
    >
      <Image
        width={3000}
        height={3000}
        quality={100}
        src="/lights.png"
        alt=""
        className="h-full w-full translate-y-[-15%] scale-[1.5] object-cover blur"
      />
      <Image
        width={1080}
        height={1080}
        quality={100}
        src="/stars.png"
        alt=""
        className="absolute top-0 h-full w-full translate-y-[-30%] animate-pulse object-contain"
      />
      <Image
        width={1080}
        height={1080}
        quality={100}
        src="/grid.png"
        alt=""
        className="absolute top-0 h-full w-full scale-75 animate-pulse object-contain"
      />
      <div className="from-background via-background pointer-events-none absolute bottom-0 h-60 w-full bg-gradient-to-t to-transparent" />
    </motion.div>
  )
}
