/* -------------------------------------------------------------------------- */
/* Imports                                                                    */
/* -------------------------------------------------------------------------- */

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/utils/cn'

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
      <SliderPrimitive.Track className="bg-primary/20 relative h-1.5 w-full grow overflow-hidden rounded-full">
        <SliderPrimitive.Range className="bg-primary absolute h-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          'bg-elements border-primary focus-visible:ring-primary ring-offset-background block h-4 w-4  rounded-full border-2 shadow ring-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
        )}
      />
    </SliderPrimitive.Root>
  )
})

Slider.displayName = SLIDER_NAME

export { Slider }
