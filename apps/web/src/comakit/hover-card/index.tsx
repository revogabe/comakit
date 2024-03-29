/* ----------------------------------------------------------------------------
 * Imports
 * --------------------------------------------------------------------------*/

import * as React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import { cn } from '@/utils/cn'

/* ----------------------------------------------------------------------------
 * Extends
 * --------------------------------------------------------------------------*/

const HoverCardRoot = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger

/* ----------------------------------------------------------------------------
 * HoverCard : Content
 * --------------------------------------------------------------------------*/

type HoverCardContentElement = React.ElementRef<typeof HoverCardPrimitive.Content>
type HoverCardContentProps = React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>

const HOVER_CARD_CONTENT_NAME = 'HoverCardContent'

const HoverCardContent = React.forwardRef<HoverCardContentElement, HoverCardContentProps>(
  (props, ref) => {
    const { className, align = 'center', sideOffset = 14, ...contentProps } = props
    return (
      <HoverCardPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'border-border bg-secondary text-muted-foreground-foreground z-50 w-64 rounded-md border p-4 shadow-md outline-none',
          'data-[state=open]:data-[side=top]:animate-slide-down-fade data-[state=open]:data-[side=right]:animate-slide-left-fade data-[state=open]:data-[side=bottom]:animate-slide-up-fade data-[state=open]:data-[side=left]:animate-slide-right-fade',
          'data-[state=closed]:animate-dropdown-hide will-change-[transform,opacity]',
          className,
        )}
        {...contentProps}
      />
    )
  },
)

HoverCardContent.displayName = HOVER_CARD_CONTENT_NAME

/* ----------------------------------------------------------------------------
 * Exports
 * --------------------------------------------------------------------------*/

export const HoverCard = Object.assign(
  {},
  {
    Root: HoverCardRoot,
    Trigger: HoverCardTrigger,
    Content: HoverCardContent,
  },
)
