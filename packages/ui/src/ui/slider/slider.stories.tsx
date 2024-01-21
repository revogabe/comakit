import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '../slider'
import { Card } from '../card'
import { Button } from '../button'

const meta = {
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render(props) {
    const [value, setValue] = React.useState([0])
    const [min, setMin] = React.useState(0)
    const [max, setMax] = React.useState(100)

    return (
      <Card.Root>
        <Card.Header>
          <Card.Title>Slider: {value}</Card.Title>
        </Card.Header>
        <Slider onValueChange={setValue} min={min} max={max} value={value} />
        <Card.Footer className="gap-4">
          <Button variant="danger" className="w-full" onClick={() => setMin(0)}>
            Min in 0
          </Button>
          <Button variant="danger" className="w-full" onClick={() => setMin(20)}>
            Min in 20
          </Button>
          <Button variant="danger" className="w-full" onClick={() => setMin(40)}>
            Min in 40
          </Button>
        </Card.Footer>
        <Card.Footer className="gap-4">
          <Button variant="success" className="w-full" onClick={() => setMax(60)}>
            Max in 60
          </Button>
          <Button variant="success" className="w-full" onClick={() => setMax(80)}>
            Max in 80
          </Button>
          <Button variant="success" className="w-full" onClick={() => setMax(100)}>
            Max in 100
          </Button>
        </Card.Footer>
      </Card.Root>
    )
  },
}
