import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '.'
import { Form } from '../form'
import { Button } from '../button'

const meta = {
  title: 'Components/Card',
  component: Card.Root,
  argTypes: {
    size: {
      options: ['default', 'lg', 'sm'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Card.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <Card.Root {...props}>
        <Card.Header>
          <Card.Title>Hello World</Card.Title>
          <Card.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula aliquam
            eros a tempus. Integer congue.
          </Card.Description>
        </Card.Header>

        <div className="flex flex-col w-full gap-4 ">
          <Form.Field className="w-full">
            <Form.Label>Email</Form.Label>
            <Form.Control className="w-full" placeholder="" size="sm" />
          </Form.Field>
          <Form.Field className="w-full">
            <Form.Label>Password</Form.Label>
            <Form.Control className="w-full" placeholder="" size="sm" />
          </Form.Field>
          <Form.Field className="w-full">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control className="w-full" placeholder="" size="sm" />
          </Form.Field>
        </div>

        <Card.Footer>
          <Button variant="primary" size="sm">
            Apply
          </Button>
        </Card.Footer>
      </Card.Root>
    )
  },
}
