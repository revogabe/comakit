/* -----------------------------------------------------------------------------
 * Imports
 * ----------------------------------------------------------------------------*/

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { cn } from '@/utils/cn'

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
        'bg-secondary group mb-4 rounded-lg border duration-200  ease-out data-[state=closed]:hover:opacity-70',
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
            'flex flex-1 items-center  justify-between  p-4 text-sm font-semibold transition-all [&[data-state=open]>svg]:rotate-180',
            className,
          )}
          {...triggerProps}
        >
          {children}
          <ChevronDownIcon className="text-primary-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
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
          'data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down overflow-hidden text-sm',
          className,
        )}
        {...contentProps}
      >
        <div className="text-muted-foreground group-hover:text-foreground px-4 pb-4 duration-300 ease-out">
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
