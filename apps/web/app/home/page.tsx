'use client'

import React from 'react'
import { Button, Card } from '@/comakit'
import { cn } from '@/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'

const Home: App.Page = () => {
  const [spanHovered, setSpanHovered] = React.useState(false)

  return (
    <main className="mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-start px-8 pb-12">
      <div className="flex h-max w-full flex-col items-center justify-start">
        <span
          onMouseEnter={() => setSpanHovered(true)}
          onMouseLeave={() => setSpanHovered(false)}
          className={cn(
            'bg-elements hover:bg-secondary text-muted-foreground hover:text-foreground group relative mt-24 flex h-8 w-[220px] cursor-default items-center justify-center gap-3 whitespace-nowrap rounded-full border text-sm duration-200 ease-out hover:w-[230px]',
            'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
          )}
        >
          <AnimatePresence mode="popLayout">
            {spanHovered && (
              <motion.span
                initial={{
                  opacity: 0,
                  translateX: 16,
                  display: 'hidden',
                }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                  display: 'inline',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 340,
                  damping: 48,
                }}
                className="absolute left-5 text-xs"
              >
                🎉
              </motion.span>
            )}
          </AnimatePresence>
          <p className="group-hover:text-foreground absolute mx-auto translate-x-0 duration-200 ease-out group-hover:translate-x-3">
            Comakit 1.0 - Public Beta
          </p>
        </span>
        <div className="mt-6 flex flex-col items-center justify-center gap-2">
          <h1 className="text-8xl">Comakit</h1>
          <h3 className="mt-2 w-[530px] text-center font-medium">
            Welcome to Comakit, your ultimate UI library for React, inspired by the best in the
            field.
          </h3>
          <div className="mt-20 flex gap-6">
            <Button variant="secondary">Explore Components</Button>
            <Button>Get Started</Button>
          </div>
        </div>

        <div className="mt-24 flex gap-8">
          <Card.Root size="sm">
            <div className="flex items-start justify-start gap-4">
              <Button variant="outline" size="icon">
                X
              </Button>
              <div className="flex-1">
                <h1 className="leading-none">Themes</h1>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis.
                </p>
              </div>
            </div>
          </Card.Root>
          <Card.Root size="sm">
            <div className="flex items-start justify-start gap-4">
              <Button variant="outline" size="icon">
                X
              </Button>
              <div className="flex-1">
                <h1 className="leading-none">CLI</h1>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis.
                </p>
              </div>
            </div>
          </Card.Root>
          <Card.Root size="sm">
            <div className="flex items-start justify-start gap-4">
              <Button variant="outline" size="icon">
                X
              </Button>
              <div className="flex-1">
                <h1 className="leading-none">Composable</h1>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis.
                </p>
              </div>
            </div>
          </Card.Root>
        </div>

        <div className="bg-secondary mt-24 h-[720px] w-full rounded-lg border">Componentes</div>
      </div>
    </main>
  )
}

export default Home
