'use client'

import React from 'react'
import { components, guides } from '@/contents/docs'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/comakit'

export const Sidebar = () => {
  const pathname = usePathname()

  return (
    <header className="bg-background fixed contents h-full overflow-hidden lg:pointer-events-none lg:z-40 lg:flex">
      <div className="lg:border-border contents lg:pointer-events-auto lg:block  lg:w-60 lg:overflow-y-auto lg:border-r lg:px-6 lg:pb-8 ">
        <nav className="hiddenlg:block">
          <Link
            href="http://comakit.com"
            className="flex  w-full shrink-0 items-center justify-start gap-2.5  pb-6 pt-4 duration-300 ease-out hover:opacity-70"
          >
            <h1 className="flex items-center gap-3">
              Comakit
              <span className="text-primary-foreground bg-primary flex h-5 items-center justify-center rounded-full px-2 py-1 text-[10px]">
                DOCS
              </span>
            </h1>
          </Link>

          {/* Quick Start */}
          <ul role="list">
            <li className="relative mt-6 md:mt-0">
              <h2 className="text-foreground text-xs font-semibold">Getting Started</h2>
              <div className="relative mt-3 pl-2">
                <div
                  className={cn('bg-border absolute inset-y-0 left-2 w-px')}
                  style={{
                    transform: 'none',
                    transformOrigin: '50% 50% 0px',
                  }}
                ></div>
                <ul role="list" className="border-l border-transparent">
                  {guides.map((guide, index) => (
                    <li key={index} className="relative text-sm">
                      {pathname === guide.href && (
                        <div className="bg-foreground absolute my-auto h-full w-px" />
                      )}
                      <a
                        className="text-muted-foreground hover:text-foreground flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition "
                        href={guide.href}
                      >
                        <span className="truncate">{guide.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          {/* Components */}
          <ul role="list" className="mt-6">
            <li className="relative mt-6 md:mt-0">
              <h2 className="text-foreground text-xs font-semibold">Components</h2>
              <div className="relative mt-3 pl-2">
                <div
                  className={cn('bg-border absolute inset-y-0 left-2 w-px')}
                  style={{
                    transform: 'none',
                    transformOrigin: '50% 50% 0px',
                  }}
                ></div>
                <ul role="list" className="border-l border-transparent">
                  {components.map((component, index) => (
                    <li key={index} className="relative">
                      {pathname === component.href && (
                        <div className="bg-foreground absolute my-auto h-full w-px" />
                      )}
                      <a
                        className="text-muted-foreground hover:text-foreground flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition "
                        href={component.href}
                      >
                        <span className="truncate">{component.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
