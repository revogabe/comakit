import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '.'

const meta = {
  title: 'Components/Calendar',
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    const [date, setDate] = React.useState<Date>()

    return <Calendar />
  },
}
