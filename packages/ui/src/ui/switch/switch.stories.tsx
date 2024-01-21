import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '.'

const meta = {
  title: 'Components/Switch',
  argTypes: {
    shape: {
      control: {
        type: 'radio',
      },
      options: ['circle', 'square'],
    },
  },
  args: {
    shape: 'circle',
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <label className="flex gap-4 items-center justify-center">
        <h5>Toogle me</h5>
        <Switch {...props} />
      </label>
    )
  },
}
