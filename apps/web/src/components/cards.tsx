'use client'

import React from 'react'
import { Avatar, Button, Card, Form, NavLink, Slider, Switch } from '@/comakit'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub, FaVolumeUp } from 'react-icons/fa'
import { FaVolumeDown } from 'react-icons/fa'
import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'

export const AuthCard = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{
        y: 124,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 340,
        damping: 64,
      }}
      className="z-30 inline-block h-auto w-auto"
    >
      <Card.Root className={cn('bg-secondary/70 w-[448px] backdrop-blur', className)}>
        <Card.Header>
          <Card.Title>Sign in</Card.Title>
          <Card.Description>Enter your details below to continue using Comakit.</Card.Description>
        </Card.Header>

        <div>
          <Form.Field className="w-full">
            <Form.Label>Email</Form.Label>
            <Form.Control className="w-full" placeholder="Enter your email" />
          </Form.Field>

          <Form.Field className="mt-4 w-full">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" className="w-full" placeholder="Enter your password" />
          </Form.Field>

          <Button className="mt-8 w-full">Entrar</Button>
        </div>

        <div className="my-1 flex items-center justify-center gap-4">
          <div className="bg-border h-px w-full rounded-full" />
          <span className="text-placeholder text-xs uppercase">OR</span>
          <div className="bg-border h-px w-full rounded-full" />
        </div>

        <div className="flex w-full flex-col gap-4">
          <Button variant="secondary">
            <FcGoogle />
            Login with Google
          </Button>
          <Button variant="secondary">
            <FaGithub />
            Login with Github
          </Button>

          <div className="mt-3 flex w-full items-center justify-center">
            <span className="text-muted-foreground text-sm">Don&apos;t have an account?</span>
            <NavLink href="/">
              <span className="ml-1.5 text-sm font-medium">Sign up</span>
            </NavLink>
          </div>
        </div>
      </Card.Root>
    </motion.div>
  )
}

export const SocialCard = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{
        y: 124,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 340,
        damping: 64,
        delay: 0.2,
      }}
      className="z-20 inline-block h-auto w-auto"
    >
      <Card.Root className={cn('bg-secondary/70 w-[448px] gap-6 backdrop-blur ', className)}>
        <div className="flex w-full items-center justify-start gap-3">
          <Avatar.Group max={3} size="sm">
            <Avatar.Root shape="circle" size="sm">
              <Avatar.Fallback>RV</Avatar.Fallback>
              <Avatar.Image src="https://github.com/revogabe.png" alt="Fidlar Album" />
            </Avatar.Root>
            <Avatar.Root shape="circle" size="sm">
              <Avatar.Fallback>RV</Avatar.Fallback>
              <Avatar.Image src="https://github.com/joaom00.png" alt="Fidlar Album" />
            </Avatar.Root>
            <Avatar.Root shape="circle" size="sm">
              <Avatar.Fallback>RV</Avatar.Fallback>
              <Avatar.Image src="https://github.com/meluiz.png" alt="Fidlar Album" />
            </Avatar.Root>
            <Avatar.Root shape="circle" size="sm">
              <Avatar.Fallback>RV</Avatar.Fallback>
              <Avatar.Image src="https://github.com/caixeta.png" alt="Fidlar Album" />
            </Avatar.Root>
            <Avatar.Root shape="circle" size="sm">
              <Avatar.Fallback>RV</Avatar.Fallback>
              <Avatar.Image src="https://github.com/asancode.png" alt="Fidlar Album" />
            </Avatar.Root>
          </Avatar.Group>
          <h5 className="text-sm font-medium">Users listening now...</h5>
        </div>

        <div className="flex flex-col gap-6 py-2">
          <div className="flex items-start justify-start gap-4">
            <div>
              <Avatar.Root shape="square" size="xl">
                <Avatar.Fallback>PUP</Avatar.Fallback>
                <Avatar.Image
                  src="https://m.media-amazon.com/images/I/81CpEzM-E2L._AC_SX679_.jpg"
                  alt="Fidlar Album"
                />
              </Avatar.Root>
            </div>
            <div>
              <h3>No Waves</h3>
              <p>FIDLAR</p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-4">
            <div>
              <Avatar.Root shape="square" size="xl">
                <Avatar.Fallback>PC</Avatar.Fallback>
                <Avatar.Image
                  src="https://i.scdn.co/image/ab67616d0000b27398ea0e689c91f8fea726d9bb"
                  alt="Playboi Carti Album"
                />
              </Avatar.Root>
            </div>
            <div>
              <h3>Sky</h3>
              <p>Playboi Carti</p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-4">
            <div>
              <Avatar.Root shape="square" size="xl">
                <Avatar.Fallback>BJ</Avatar.Fallback>
                <Avatar.Image
                  src="https://i1.sndcdn.com/artworks-xjGmofafWql7-0-t500x500.jpg"
                  alt="Boldy James Album"
                />
              </Avatar.Root>
            </div>
            <div>
              <h3>Hot Water Tank</h3>
              <p>Boldy James</p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-4">
            <div>
              <Avatar.Root shape="square" size="xl">
                <Avatar.Fallback>Jm</Avatar.Fallback>
                <Avatar.Image
                  src="https://f4.bcbits.com/img/a4208735322_10.jpg"
                  alt="Joyce Manor Album"
                />
              </Avatar.Root>
            </div>
            <div>
              <h3>Catalina Fight Song</h3>
              <p>Joyce Manor</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <FaVolumeDown />
          <Slider defaultValue={[30]} />
          <FaVolumeUp />
        </div>

        <div className="flex w-full items-center justify-start gap-4">
          <Button size="sm" variant="primary">
            Play
          </Button>
          <Button size="sm" variant="secondary">
            Pause
          </Button>
          <Button size="sm" variant="secondary">
            Add to Queue
          </Button>
        </div>
      </Card.Root>
    </motion.div>
  )
}

export const CookiesCard = ({ className }: { className?: string }) => {
  const [cookies, setCookies] = React.useState(false)
  const [marketing, setMarketing] = React.useState(false)

  return (
    <motion.div
      initial={{
        y: 124,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 340,
        damping: 64,
        delay: 0.4,
      }}
      className="z-20 inline-block h-auto w-auto"
    >
      <Card.Root className={cn('bg-secondary/70 w-[448px] backdrop-blur ', className)}>
        <Card.Header>
          <Card.Title>Cookie Settings</Card.Title>
          <Card.Description>
            We use cookies to improve your experience on our website. By browsing this website.
          </Card.Description>
        </Card.Header>

        <div className="my-2 flex flex-col gap-8">
          <label className="flex select-none items-start justify-between gap-4">
            <div>
              <h5 className="font-semibold">
                Stricky Necessary Cookies{' '}
                <span className="text-muted-foreground font-normal">(Required)</span>
              </h5>
              <p className="mt-1">
                These cookies are necessary for the website to function and cannot be deactivated.
              </p>
            </div>
            <Switch defaultChecked={true} checked={cookies} onCheckedChange={setCookies} />
          </label>
          <label className="flex select-none items-start justify-between gap-4">
            <div>
              <h5 className="font-semibold">Marketing & Analytics Cookies</h5>
              <p className="mt-1">
                These cookies are used to provide you with a more personalized experience on our.
              </p>
            </div>
            <Switch defaultChecked={false} checked={marketing} onCheckedChange={setMarketing} />
          </label>
        </div>

        <div className="flex w-full flex-col gap-4">
          <Button
            variant="primary"
            disabled={cookies && marketing}
            onClick={() => {
              setCookies(true)
              setMarketing(true)
            }}
          >
            Accept all cookies
          </Button>
          <Button variant="secondary">Save settings</Button>
        </div>
      </Card.Root>
    </motion.div>
  )
}
