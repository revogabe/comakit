import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dialog } from '../dialog'
import { Button } from '../button'
import { Form } from '../form'

const meta = {
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <Dialog.Root defaultOpen={true}>
        <Dialog.Trigger>
          <Button variant="secondary" size="sm">
            Dialog
          </Button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Hello World</Dialog.Title>
            <Dialog.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula
            </Dialog.Description>
          </Dialog.Header>

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

          <Dialog.Footer>
            <Dialog.Close>
              <Button variant="secondary" size="sm">
                Cancel
              </Button>
            </Dialog.Close>
            <Button variant="primary" size="sm">
              Apply
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    )
  },
}
