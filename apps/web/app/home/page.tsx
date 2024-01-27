'use client'

import React from 'react'
import { Button, Card } from '@/comakit'
import { cn } from '@/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import { AuthCard, CookiesCard, SocialCard } from '@/components/cards'

const Home: App.Page = () => {
  const [spanHovered, setSpanHovered] = React.useState(false)
  const [buttonHovered, setButtonHovered] = React.useState(false)

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
        duration: 0.8,
      }}
      className="mx-auto flex min-h-screen  max-w-[1440px] flex-col items-center justify-start px-8 pb-12"
    >
      <div className="flex h-max w-full flex-col items-center justify-start">
        <motion.span
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
          onMouseEnter={() => setSpanHovered(true)}
          onMouseLeave={() => setSpanHovered(false)}
          className={cn(
            'bg-elements hover:bg-secondary text-muted-foreground hover:text-foreground group relative mt-24 flex h-8 w-[160px] cursor-default select-none items-center justify-center gap-3 whitespace-nowrap rounded-full border text-sm duration-200 ease-out hover:w-[190px]',
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
            Comakit 1.0 - Beta
          </p>
        </motion.span>
        <div className="mt-6 flex flex-col items-center justify-center gap-2">
          <motion.h1
            initial={{
              opacity: 0,
              translateY: 24,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              ease: 'easeOut',
              duration: 0.8,
              delay: 0.2,
            }}
            className="from-foreground/40 to-foreground  bg-gradient-to-r bg-clip-text text-8xl text-transparent"
          >
            Comakit
          </motion.h1>

          <motion.h3
            initial={{
              opacity: 0,
              translateY: 12,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              ease: 'easeOut',
              duration: 0.8,
              delay: 0.4,
            }}
            className="from-muted-foreground/50 to-foreground mt-2 w-[530px] bg-gradient-to-r bg-clip-text text-center font-normal text-transparent"
          >
            Welcome to Comakit, your ultimate UI library for React, inspired by the best in the
            field.
          </motion.h3>
          <div className="mt-16 flex gap-6">
            <Button variant="secondary">Explore Components</Button>
            <div className="relative">
              <Button
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                className="z-10 duration-700 hover:scale-[1.02]"
              >
                Get Started
              </Button>
              <AnimatePresence>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -2,
                  }}
                  animate={{
                    opacity: buttonHovered ? 1 : 0,
                    y: buttonHovered ? 8 : -2,
                  }}
                  exit={{
                    opacity: 0,
                    y: -2,
                  }}
                  transition={{
                    ease: 'easeOut',
                    duration: 0.4,
                  }}
                  className="from-primary to-primary-border/25 absolute inset-0 -z-10 h-6 w-[120px] bg-gradient-to-t blur-lg"
                />
              </AnimatePresence>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -2,
                }}
                animate={{
                  opacity: buttonHovered ? 1 : 0,
                  y: buttonHovered ? 8 : -2,
                }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.4,
                }}
                className="to-primary-border/25 absolute inset-0 -z-10 h-4 w-[120px] bg-gradient-to-t from-white mix-blend-color-burn blur-md"
              />
            </div>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center overflow-hidden pb-12 pt-28">
          <SocialCard className="translate-x-[25%] translate-y-[15%] duration-500 ease-out hover:translate-y-[13%] hover:brightness-110" />

          <AuthCard className="bg-secondary/90 z-30 shadow-2xl shadow-black/50 duration-500 ease-out hover:translate-y-[-2%] hover:brightness-110" />

          <CookiesCard className="translate-x-[-25%] translate-y-[20%] duration-500 ease-out hover:translate-y-[18%] hover:brightness-110" />

          <div className="via-background from-background pointer-events-none absolute bottom-0 z-40 h-[420px] w-full translate-y-[45%] bg-gradient-to-t to-transparent" />
        </div>

        <div className="h-[800px] w-full"></div>
      </div>
    </motion.main>
  )
}

export default Home
