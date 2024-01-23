import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NavLink } from '.'

const meta = {
  title: 'Components/NavLink',
  component: NavLink,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
  },
  args: {
    size: 'default',
  },
} satisfies Meta<typeof NavLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <NavLink href="https://revogabe.vercel.app/" {...props}>
        @revogabe
      </NavLink>
    )
  },
}
