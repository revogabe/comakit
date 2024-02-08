'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { NavDoc } from '@/components/nav-doc'

const Docs: App.Page = () => {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.4,
      }}
      className="mx-auto flex h-full w-full max-w-[1440px] items-start justify-center  overflow-hidden"
    >
      <NavDoc />
      <div className="scrollbar-hide bg-background/75 relative h-full w-full overflow-y-auto px-8 py-5">
        <div className="h-[2000px]">
          <h1>Teste</h1>
          <p>klasjdlkajsdl</p>
        </div>
      </div>
    </motion.main>
  )
}

export default Docs
