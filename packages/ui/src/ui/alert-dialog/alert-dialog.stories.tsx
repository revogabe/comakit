import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AlertDialog } from '../alert-dialog'
import { Button } from '../button'

const meta = {
  title: 'Components/AlertDialog',
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <AlertDialog.Root defaultOpen={true}>
        <AlertDialog.Trigger>
          <Button variant="secondary" size="sm">
            AlertDialog
          </Button>
        </AlertDialog.Trigger>

        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Error 404 - Page not found</AlertDialog.Title>
            <AlertDialog.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula aliquam
              eros a tempus. Curabitur sed urna sed ex volutpat ultrices.
            </AlertDialog.Description>
          </AlertDialog.Header>

          <AlertDialog.Footer>
            <AlertDialog.Cancel>
              <Button variant="secondary" size="sm">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="danger" size="sm">
                Apply
              </Button>
            </AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Root>
    )
  },
}
