import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '.'

const meta = {
  title: 'Components/Accordion',
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <Accordion.Root type="single" defaultValue="1" collapsible>
        <Accordion.Item value="1">
          <Accordion.Trigger>Trigger 1</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cumque reprehenderit
            reiciendis veniam consectetur. Repellendus iste ullam sed? Quos quibusdam sit id ut
            laboriosam optio voluptates. Nesciunt ipsa possimus quis.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="2">
          <Accordion.Trigger>Trigger 2</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cumque reprehenderit
            reiciendis veniam consectetur. Repellendus iste ullam sed? Quos quibusdam sit id ut
            laboriosam optio voluptates. Nesciunt ipsa possimus quis.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="3">
          <Accordion.Trigger>Trigger 3</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cumque reprehenderit
            reiciendis veniam consectetur. Repellendus iste ullam sed? Quos quibusdam sit id ut
            laboriosam optio voluptates. Nesciunt ipsa possimus quis.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="4">
          <Accordion.Trigger>Trigger 4</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cumque reprehenderit
            reiciendis veniam consectetur. Repellendus iste ullam sed? Quos quibusdam sit id ut
            laboriosam optio voluptates. Nesciunt ipsa possimus quis.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    )
  },
}
