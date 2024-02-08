'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Contributors: App.Page = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.8,
      }}
      className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-start px-8 pb-12"
    >
      <div className="flex h-[4000px] w-full flex-col items-center justify-start pt-24">
        <h1>Contributors</h1>
      </div>
    </motion.div>
  )
}

export default Contributors
