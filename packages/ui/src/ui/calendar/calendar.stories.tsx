import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '.'
import { Button } from '../button'
import { Popover } from '../popover'

const meta = {
  title: 'Components/Calendar',
} satisfies Meta<typeof Calendar>

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
