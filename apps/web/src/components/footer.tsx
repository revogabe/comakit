import Image from 'next/image'
import React from 'react'

export const Foooter = () => {
  return (
    <footer className="border-border/50 mx-auto mt-24 w-full border-t sm:mt-32 lg:mt-24">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
        <h2 className="flex items-center gap-1.5 leading-none">
          Comakit <span className="text-primary-border leading-none">UI</span>
        </h2>
        <p className="text-placeholder text-sm">© Copyright 2024 Comakit. All rights reserved.</p>
      </div>
    </footer>
  )
}
