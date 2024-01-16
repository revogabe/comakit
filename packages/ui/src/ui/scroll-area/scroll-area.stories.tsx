import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from '../scroll-area'

const meta = {
  title: 'Components/ScrollArea',
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <ScrollArea.Root className="h-[400px] w-full">
        <main className="h-[4000px] w-[400px] bg-red-500 flex justify-between">
          <div className="flex">Hello</div>
          <div className="flex">Hello</div>
          <ScrollArea.Bar orientation="vertical" />
        </main>
      </ScrollArea.Root>
    )
  },
}
