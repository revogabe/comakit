/* -------------------------------------------------------------------------- */
/* Imports                            
/* -------------------------------------------------------------------------- */

import * as React from 'react'
import { cn } from '../../utils/cn'
import * as PopoverPrimitive from '@radix-ui/react-popover'

/* -------------------------------------------------------------------------- */
/* Extends
/* -------------------------------------------------------------------------- */

const PopoverRoot = PopoverPrimitive.Root

/* -------------------------------------------------------------------------- */
/* Popover - Trigger
/* -------------------------------------------------------------------------- */

type PopoverTriggerElement = React.ElementRef<typeof PopoverPrimitive.Trigger>
type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>

const POPOVER_TRIGGER = 'PopoverTrigger'

const PopoverTrigger = React.forwardRef<PopoverTriggerElement, PopoverTriggerProps>(
  (props, ref) => {
    const { asChild = true, ...triggerProps } = props

    return <PopoverPrimitive.Trigger ref={ref} asChild={asChild} {...triggerProps} />
  },
)

PopoverTrigger.displayName = POPOVER_TRIGGER

/* -------------------------------------------------------------------------- */
/* Popover - Content
/* -------------------------------------------------------------------------- */

type PopoverContentElement = React.ElementRef<typeof PopoverPrimitive.Content>
type PopoverContentProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>

const CONTENT_NAME = 'PopoverContent'

const PopoverContent = React.forwardRef<PopoverContentElement, PopoverContentProps>(
  (props, ref) => {
    const { className, align = 'start', sideOffset = 14, ...contentProps } = props

    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            'z-50 w-full max-w-md rounded-lg border bg-secondary p-2 text-foreground outline-none',
            'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
            'will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slide-down-fade data-[state=open]:data-[side=right]:animate-slide-left-fade data-[state=open]:data-[side=bottom]:animate-slide-up-fade data-[state=open]:data-[side=left]:animate-slide-right-fade',
            'origin-[--radix-popover-content-transform-origin]',
            className,
          )}
          {...contentProps}
        />
      </PopoverPrimitive.Portal>
    )
  },
)

PopoverContent.displayName = CONTENT_NAME

/* -------------------------------------------------------------------------- */
/* Exports
/* -------------------------------------------------------------------------- */

export const Popover = Object.assign(
  {},
  {
    Root: PopoverRoot,
    Anchor: PopoverPrimitive.Anchor,
    Trigger: PopoverTrigger,
    Content: PopoverContent,
  },
)
