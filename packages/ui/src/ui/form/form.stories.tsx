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
        <Form.ControlGroup>
          <Form.ControlLeading>
            <Button size="sm" variant="secondary">
              Teste
            </Button>
          </Form.ControlLeading>
          <Form.Control placeholder="Placeholder" size="default" />
        </Form.ControlGroup>
        <Form.Hint>Write your first name here.</Form.Hint>
        <Form.Error>Error: This field is required. Please, fill it.</Form.Error>
      </Form.Field>
    )
  },
}
