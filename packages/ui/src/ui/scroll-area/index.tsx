/* ----------------------------------------------------------------------------
 * Imports
 * --------------------------------------------------------------------------*/

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cn } from '../../utils/cn'

/* ----------------------------------------------------------------------------
 * Types - ScrollArea:Root
 * --------------------------------------------------------------------------*/

type ScrollAreaElement = React.ComponentRef<typeof ScrollAreaPrimitive.Root>
type ScrollAreaPrimitiveProps = React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>

export interface ScrollAreaProps extends ScrollAreaPrimitiveProps {
  rootClassName?: string
}

/* ----------------------------------------------------------------------------
 * Component - ScrollArea:Root
 * --------------------------------------------------------------------------*/

const SCROLLAREA_NAME = 'ScrollAreaRoot'

const Root = React.forwardRef<ScrollAreaElement, ScrollAreaProps>((props, ref) => {
  const { className, rootClassName, children, ...rootProps } = props

  return (
    <ScrollAreaPrimitive.Root
      className={cn('relative h-full w-max overflow-hidden', rootClassName)}
    >
      <ScrollAreaPrimitive.Viewport
        ref={ref}
        className={cn('h-full w-full rounded-[inherit]', className)}
        {...rootProps}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
})

Root.displayName = SCROLLAREA_NAME

/* ----------------------------------------------------------------------------
 * Types - ScrollArea:Scrollbar
 * --------------------------------------------------------------------------*/

type ScrollBarElement = React.ComponentRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
type ScrollBarPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>
export interface ScrollBarProps extends ScrollBarPrimitiveProps {}

/* ----------------------------------------------------------------------------
 * Component - ScrollArea:Scrollbar
 * --------------------------------------------------------------------------*/

const SCROLLBAR_NAME = 'Scrollbar'

const Bar = React.forwardRef<ScrollBarElement, ScrollBarProps>((props, ref) => {
  const { className, orientation = 'vertical', ...scrollBarProps } = props

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
        orientation === 'horizontal' && 'h-2.5 border-t border-t-transparent w-full p-[1px]',
        className,
      )}
      {...scrollBarProps}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-scroll-thumb" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
})

Bar.displayName = SCROLLBAR_NAME

/* ----------------------------------------------------------------------------
 * Exports
 * --------------------------------------------------------------------------*/

export const ScrollArea = Object.assign(
  {},
  {
    Root,
    Bar,
  },
)
