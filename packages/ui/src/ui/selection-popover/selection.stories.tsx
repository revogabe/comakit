import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SelectionPopover } from '../selection-popover'
import { Card } from '../card'
import { Button } from '../button'

const meta = {
  title: 'Components/SelectionPopover',
} satisfies Meta<typeof SelectionPopover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <Card.Root>
        <SelectionPopover.Root>
          <SelectionPopover.Trigger asChild>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ipsum rerum aliquam
              quibusdam iste nulla mollitia quo, sint perferendis officia earum possimus ea
              deserunt? Veritatis ea est deserunt nemo placeat. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illum repellendus nemo unde quas voluptatum sed optio
              animi commodi quibusdam, provident molestias veniam laboriosam magni quis molestiae
              mollitia eos impedit quo.
            </p>
          </SelectionPopover.Trigger>
          <SelectionPopover.Content side="top" sideOffset={12}>
            <Button size="sm" variant="secondary">
              Cut
            </Button>
            <Button size="sm" variant="secondary">
              Copy
            </Button>
            <Button size="sm" variant="secondary">
              Share
            </Button>
            {/* <SelectionPopover.Arrow /> */}
          </SelectionPopover.Content>
        </SelectionPopover.Root>
      </Card.Root>
    )
  },
}
