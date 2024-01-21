import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from '../scroll-area'
import { Card } from '../card'

const meta = {
  title: 'Components/ScrollArea',
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    return (
      <Card.Root>
        <ScrollArea.Root className="w-[400px] h-[400px] ">
          <div className="w-full h-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ex commodi reiciendis
            voluptatem debitis molestias minus in, temporibus culpa aliquam possimus accusantium vel
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            enim. Repellendus animi aut consequuntur cumque. Quasi. consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            enim. Repellendus animi aut consequuntur cumque. Quasi. consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            enim. Repellendus animi aut consequuntur cumque. Quasi. consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            consequuntur cumque. Quasi. enim. Repellendus animi aut consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            consequuntur cumque. Quasi. enim. Repellendus animi aut consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            consequuntur cumque. Quasi. enim. Repellendus animi aut consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            enim. Repellendus animi aut consequuntur cumque. Quasi. consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            enim. Repellendus animi aut consequuntur cumque. Quasi. consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            consequuntur cumque. Quasi. enim. Repellendus animi aut consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            enim. Repellendus animi aut consequuntur cumque. Quasi. consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            enim. Repellendus animi aut consequuntur cumque. Quasi. consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            consequuntur cumque. Quasi. enim. Repellendus animi aut consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            enim. Repellendus animi aut consequuntur cumque. Quasi. consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            consequuntur cumque. Quasi. enim. Repellendus animi aut consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            consequuntur cumque. Quasi. enim. Repellendus animi aut consequuntur cumque. Quasi.
            enim. Repellendus animi aut consequuntur cumque. Quasi. enim. Repellendus animi aut
            enim. Repellendus animi aut consequuntur cumque. Quasi. consequuntur cumque. Quasi.
            consequuntur cumque. Quasi. consequuntur cumque. Quasi.
          </div>
          <ScrollArea.Bar orientation="vertical" />
        </ScrollArea.Root>
      </Card.Root>
    )
  },
}
