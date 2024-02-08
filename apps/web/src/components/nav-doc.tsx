'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/comakit'
import { cn } from '@/utils/cn'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { NAV_DOCS } from '@/content/docs/nav'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export const NavDoc = () => {
  const section = useSearchParams().get('section')

  const { LINKS, GETTING_STARTED, COMPONENTS } = NAV_DOCS

  return (
    <motion.div
      initial={{
        opacity: 0,
        maxWidth: 0,
      }}
      animate={{
        opacity: 1,
        maxWidth: '250px',
      }}
      transition={{
        type: 'spring',
        stiffness: 340,
        damping: 64,
      }}
      className="bg-background/75 flex h-full w-full flex-col items-start justify-start gap-5 border-r p-5"
    >
      <div className="flex w-full flex-col gap-2.5">
        {LINKS.map((link) => (
          <Button
            key={link.title}
            size="default"
            variant="secondary"
            className={cn('w-full cursor-pointer justify-start px-3')}
            asChild
          >
            <Link
              href={{
                pathname: link.href,
              }}
              target="_blank"
            >
              <div className="size-4 shrink-0">{link.icon}</div>

              {link.title}

              <div className="flex w-full justify-end">
                <ExternalLinkIcon />
              </div>
            </Link>
          </Button>
        ))}
      </div>

      <section className="w-full">
        <h4 className="mb-2 text-base font-bold">Getting Started</h4>
        <div className="flex w-full flex-col gap-1">
          {GETTING_STARTED.map((item) => (
            <Button
              key={item.title}
              size="sm"
              variant={section === item.href ? 'primary' : 'ghost'}
              className={cn(
                'text-muted-foreground hover:text-foreground w-full justify-start px-3 text-sm',
                {
                  'text-foreground': section === item.href,
                },
              )}
              asChild
            >
              <Link
                href={{
                  pathname: '/docs',
                  search: `?section=${item.href}`,
                }}
              >
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </section>

      <section className="w-full">
        <h4 className="mb-2 text-base font-bold">Components</h4>
        <div className="flex w-full flex-col gap-1">
          {COMPONENTS.map((item) => (
            <Button
              key={item.title}
              size="sm"
              variant={section === item.href ? 'primary' : 'ghost'}
              className={cn(
                'text-muted-foreground hover:text-foreground w-full justify-start px-3 text-sm',
                {
                  'text-foreground': section === item.href,
                },
              )}
              asChild
            >
              <Link
                href={{
                  pathname: '/docs',
                  search: `?section=${item.href}`,
                }}
              >
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
