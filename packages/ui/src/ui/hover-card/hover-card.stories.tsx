import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NavLink } from '../nav-link'
import { HoverCard } from '../hover-card'

const meta = {
  title: 'Components/HoverCard',
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <NavLink href="https://revogabe.vercel.app/" {...props}>
            @revogabe
          </NavLink>
        </HoverCard.Trigger>
        <HoverCard.Content align="start">
          <h1>Revogabe</h1>
          <p className="mt-2">
            I'm a software engineer, designer, and entrepreneur. I'm currently working on{' '}
            <NavLink href="https://revogabe.vercel.app/" {...props}>
              @revogabe
            </NavLink>
            , a platform for creators to build their own website.
          </p>
        </HoverCard.Content>
      </HoverCard.Root>
    )
  },
}
