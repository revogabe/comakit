import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '../textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  args: {
    disabled: false,
    placeholder: 'Placeholder',
    value: '',
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return <Textarea {...props} />
  },
}
