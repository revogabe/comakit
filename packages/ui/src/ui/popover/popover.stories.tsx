import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from '../popover'
import { Button } from '../button'
import { Calendar } from '../calendar'

const meta = {
  title: 'Components/Popover',
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    const [date, setDate] = React.useState<Date>()

    return (
      <Popover.Root defaultOpen={true}>
        <Popover.Trigger>
          <Button variant="secondary" size="sm">
            {date ? date.toLocaleDateString() : 'Select date'}
          </Button>
        </Popover.Trigger>

        <Popover.Content>
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </Popover.Content>
      </Popover.Root>
    )
  },
}
