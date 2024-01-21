import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from '../popover'
import { Button } from '../button'
import { Calendar } from '../calendar'
import type { DateRange } from 'react-day-picker'

const meta = {
  title: 'Components/Popover',
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    const [date, setDate] = React.useState<DateRange>()

    return (
      <Popover.Root defaultOpen={true}>
        <Popover.Trigger>
          <Button variant="secondary" size="sm">
            Popover
          </Button>
        </Popover.Trigger>

        <Popover.Content>
          <Calendar mode="range" selected={date} onSelect={setDate} initialFocus />
        </Popover.Content>
      </Popover.Root>
    )
  },
}
