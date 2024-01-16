import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Form } from '../form'
import { Button } from '../button'

const meta = {
  title: 'Components/Form',
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <Form.Field>
        <Form.Label>First Name</Form.Label>
        <Form.Control placeholder="Placeholder" size="sm" />
        <Form.Hint>Write your first name here.</Form.Hint>
        <Form.Error>Error: This field is required. Please, fill it.</Form.Error>
      </Form.Field>
    )
  },
}

export const ControlGroup: Story = {
  render(props) {
    return (
      <Form.Field>
        <Form.Label>First Name</Form.Label>
        <Form.ControlGroup>
          <Form.ControlLeading>
            <Button className="rounded-none" variant="ghost" size="sm">
              Select
            </Button>
          </Form.ControlLeading>
          <Form.Control placeholder="Placeholder" size="sm" />
        </Form.ControlGroup>
        <Form.Hint>Write your first name here.</Form.Hint>
        <Form.Error>Error: This field is required. Please, fill it.</Form.Error>
      </Form.Field>
    )
  },
}
