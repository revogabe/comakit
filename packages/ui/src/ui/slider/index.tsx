/* -------------------------------------------------------------------------- */
/* Imports                                                                    */
/* -------------------------------------------------------------------------- */

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '../../utils/cn'

/* -------------------------------------------------------------------------- */
/* Types                                                                  */
/* -------------------------------------------------------------------------- */

type SliderElement = React.ElementRef<typeof SliderPrimitive.Root>
type SliderPrimitiveProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

interface SliderProps extends SliderPrimitiveProps {}

/* -------------------------------------------------------------------------- */

const SLIDER_NAME = 'SliderRoot'

const Slider = React.forwardRef<SliderElement, SliderProps>((props, ref) => {
  const { className, ...rootProps } = props

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn('relative flex w-full touch-none select-none items-center', className)}
      {...rootProps}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          'block h-4 w-4 rounded-full bg-elements border-2 border-primary  shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50',
        )}
      />
    </SliderPrimitive.Root>
  )
})

Slider.displayName = SLIDER_NAME

export { Slider }
