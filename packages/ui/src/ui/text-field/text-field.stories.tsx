import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from '../text-field'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    size: { control: 'radio', options: ['default', 'sm', 'lg'] },
  },
  args: {
    disabled: false,
    size: 'default',
    placeholder: 'Placeholder',
    value: '',
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return <TextField {...props} />
  },
}
