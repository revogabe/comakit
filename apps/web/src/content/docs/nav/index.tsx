import { FaDiscord, FaGithub } from 'react-icons/fa'

type NavDoc = {
  LINKS: {
    icon: React.ReactNode
    title: string
    href: string
    badge?: string
  }[]
  GETTING_STARTED: {
    title: string
    href: string
    badge?: string
  }[]
  COMPONENTS: {
    title: string
    href: string
    badge?: string
  }[]
}

export const NAV_DOCS = {
  LINKS: [
    {
      icon: <FaGithub />,
      title: 'Github',
      href: 'https://github.com/revogabe/comakit',
    },
    {
      icon: <FaDiscord />,
      title: 'Community',
      href: 'https://discord.com',
    },
  ],

  GETTING_STARTED: [
    {
      title: 'Introduction',
      href: 'introduction',
    },
    {
      title: 'Installation',
      href: 'installation',
    },
    {
      title: 'CLI',
      href: 'cli',
      badge: 'New',
    },
    {
      title: 'Changelog',
      href: 'changelog',
    },
  ],

  COMPONENTS: [
    {
      title: 'Button',
      href: 'button',
    },
    {
      title: 'Input',
      href: 'input',
    },
    {
      title: 'Checkbox',
      href: 'checkbox',
    },
    {
      title: 'Radio',
      href: 'radio',
    },
    {
      title: 'Select',
      href: 'select',
    },
    {
      title: 'Textarea',
      href: 'textarea',
    },
  ],
} as NavDoc
