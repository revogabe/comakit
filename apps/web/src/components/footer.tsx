import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

export const Foooter = () => {
  return (
    <footer className=" mx-auto mt-24 w-full  sm:mt-32 lg:mt-24">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
        <h2 className="flex items-center gap-1.5 leading-none">
          Comakit <span className="text-primary-border leading-none">UI</span>
        </h2>
        <div className="flex items-center justify-end gap-4">
          <p className="text-placeholder text-sm">
            © Copyright 2024 Comakit. All rights reserved.
          </p>
          <a href="https://github.com/revogabe/comakit" target="_blank" className="hidden sm:flex">
            <FaGithub className="text-muted-foreground hover:text-foreground size-5 duration-200 ease-out" />
          </a>
        </div>
      </div>
    </footer>
  )
}
