import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from '../dropdown'
import { Button } from '../button'

const meta = {
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button variant="secondary">Open</Button>
        </Dropdown.Trigger>
        <Dropdown.Content side="bottom" align="start" sideOffset={12} className="w-56">
          <Dropdown.Label>My Account</Dropdown.Label>
          <Dropdown.Separator />
          <Dropdown.Group>
            <Dropdown.Item>
              <span>Profile</span>
              <Dropdown.Shortcut>⇧⌘P</Dropdown.Shortcut>
            </Dropdown.Item>
            <Dropdown.Item>
              <span>Billing</span>
              <Dropdown.Shortcut>⌘B</Dropdown.Shortcut>
            </Dropdown.Item>
            <Dropdown.Item>
              <span>Settings</span>
              <Dropdown.Shortcut>⌘S</Dropdown.Shortcut>
            </Dropdown.Item>
            <Dropdown.Item>
              <span>Keyboard shortcuts</span>
              <Dropdown.Shortcut>⌘K</Dropdown.Shortcut>
            </Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Separator />
          <Dropdown.Group>
            <Dropdown.Item>
              <span>Team</span>
            </Dropdown.Item>
            <Dropdown.Sub>
              <Dropdown.SubTrigger>
                <span>Invite users</span>
              </Dropdown.SubTrigger>
              <Dropdown.Portal>
                <Dropdown.SubContent>
                  <Dropdown.Item>
                    <span>Email</span>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <span>Message</span>
                  </Dropdown.Item>
                  <Dropdown.Separator />
                  <Dropdown.Item>
                    <span>More...</span>
                  </Dropdown.Item>
                </Dropdown.SubContent>
              </Dropdown.Portal>
            </Dropdown.Sub>
            <Dropdown.Item>
              <span>New Team</span>
              <Dropdown.Shortcut>⌘+T</Dropdown.Shortcut>
            </Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Separator />
          <Dropdown.Item>
            <span>GitHub</span>
          </Dropdown.Item>
          <Dropdown.Item>
            <span>Support</span>
          </Dropdown.Item>
          <Dropdown.Item disabled>
            <span>API</span>
          </Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>
            <span>Log out</span>
            <Dropdown.Shortcut>⇧⌘Q</Dropdown.Shortcut>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Root>
    )
  },
}
