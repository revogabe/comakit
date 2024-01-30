/* -----------------------------------------------------------------------------
 * Imports
 * ----------------------------------------------------------------------------*/

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { cn } from '../../utils/cn'

/* -----------------------------------------------------------------------------
 * Extend Primitives
 * ----------------------------------------------------------------------------*/

const AccordionRoot = AccordionPrimitive.Root

/* -----------------------------------------------------------------------------
 * Accordion - Item
 * ----------------------------------------------------------------------------*/

const ITEM_NAME = 'AccordionItem'

type AccordionItemElement = React.ElementRef<typeof AccordionPrimitive.Item>
type AccordionItemProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>

const AccordionItem = React.forwardRef<AccordionItemElement, AccordionItemProps>((props, ref) => {
  const { className, ...itemProps } = props

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        'mb-4 border bg-secondary rounded-lg group data-[state=closed]:hover:opacity-70  duration-200 ease-out',
        className,
      )}
      {...itemProps}
    />
  )
})

AccordionItem.displayName = ITEM_NAME

/* -----------------------------------------------------------------------------
 * Accordion - Trigger
 * ----------------------------------------------------------------------------*/

const TRIGGER_NAME = 'AccordionTrigger'

type AccordionTriggerElement = React.ElementRef<typeof AccordionPrimitive.Trigger>
type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>

const AccordionTrigger = React.forwardRef<AccordionTriggerElement, AccordionTriggerProps>(
  (props, ref) => {
    const { className, children, ...triggerProps } = props

    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            'flex flex-1 items-center  px-4  justify-between py-4 text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180',
            className,
          )}
          {...triggerProps}
        >
          {children}
          <ChevronDownIcon className="h-4 w-4 shrink-0 text-primary-foreground transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    )
  },
)

AccordionTrigger.displayName = TRIGGER_NAME

/* -----------------------------------------------------------------------------
 * Accordion - Content
 * ----------------------------------------------------------------------------*/

const CONTENT_NAME = 'AccordionContent'

type AccordionContentElement = React.ElementRef<typeof AccordionPrimitive.Content>
type AccordionContentProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>

const AccordionContent = React.forwardRef<AccordionContentElement, AccordionContentProps>(
  (props, ref) => {
    const { className, children, ...contentProps } = props

    return (
      <AccordionPrimitive.Content
        ref={ref}
        className={cn(
          'overflow-hidden text-sm data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down',
          className,
        )}
        {...contentProps}
      >
        <div className="px-4 pb-4 text-muted-foreground group-hover:text-foreground duration-300 ease-out">
          {children}
        </div>
      </AccordionPrimitive.Content>
    )
  },
)

AccordionContent.displayName = CONTENT_NAME

/* -----------------------------------------------------------------------------
 * Exports
 * ----------------------------------------------------------------------------*/

export const Accordion = Object.assign(
  {},
  {
    Root: AccordionRoot,
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
  },
)
