/* -----------------------------------------------------------------------------
 *  Imports
 * ----------------------------------------------------------------------------*/

import * as React from 'react'
import { cn } from '../../utils/cn'
import * as Selection from 'selection-popover'

/* -----------------------------------------------------------------------------
 *  Extend Primitives
 * ----------------------------------------------------------------------------*/

const SELECT_POPOVER_ROOT_NAME = 'SelectionPopoverRoot'

type SelectionPopoverRootElement = React.ElementRef<typeof Selection.Root>
type SelectionPopoverRootProps = React.ComponentPropsWithoutRef<typeof Selection.Root>

interface SelectionPopoverProps extends SelectionPopoverRootProps {}

const SelectionPopoverRoot = React.forwardRef<SelectionPopoverRootElement, SelectionPopoverProps>(
  (props, ref) => {
    const { ...rootProps } = props

    return <Selection.Root {...rootProps} />
  },
)

SelectionPopoverRoot.displayName = SELECT_POPOVER_ROOT_NAME

/* -----------------------------------------------------------------------------
 *  SelectionPopover - Trigger
 * ----------------------------------------------------------------------------*/

const SELECTION_POPOVER_TRIGGER_NAME = 'SelectionPopoverTrigger'

type SelectionTriggerElement = React.ElementRef<typeof Selection.Trigger>
type SelectionTriggerProps = React.ComponentPropsWithoutRef<typeof Selection.Trigger>

interface SelectionPopoverTriggerProps extends SelectionTriggerProps {}

const SelectionPopoverTrigger = React.forwardRef<
  SelectionTriggerElement,
  SelectionPopoverTriggerProps
>((props, ref) => {
  const { asChild = true, ...triggerProps } = props

  return <Selection.Trigger asChild={asChild} {...triggerProps} ref={ref} />
})

SelectionPopoverTrigger.displayName = SELECTION_POPOVER_TRIGGER_NAME

/* -----------------------------------------------------------------------------
 *  SelectionPopover - Content
 * ----------------------------------------------------------------------------*/

const SELECTION_POPOVER_CONTENT_NAME = 'SelectionPopoverContent'

type SelectionContentElement = React.ElementRef<typeof Selection.Content>
type SelectionContentProps = React.ComponentPropsWithoutRef<typeof Selection.Content>

interface SelectionPopoverContentProps extends SelectionContentProps {}

const SelectionPopoverContent = React.forwardRef<
  SelectionContentElement,
  SelectionPopoverContentProps
>((props, ref) => {
  const { className, align = 'center', sideOffset = 4, ...contentProps } = props

  return (
    <Selection.Portal>
      <Selection.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'flex items-center justify-center gap-2 w-full border border-border min-w-max rounded-lg bg-elements px-2 py-1.5 h-max',
          'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
          'data-[state=open]:animate-selection-show data-[state=closed]:animate-selection-hide',
          className,
        )}
        {...contentProps}
      />
    </Selection.Portal>
  )
})
SelectionPopoverContent.displayName = SELECTION_POPOVER_CONTENT_NAME

// /* -----------------------------------------------------------------------------
//  *  SelectionPopover - Arrow
//  * ----------------------------------------------------------------------------*/

// const SELECTION_POPOVER_ARROW_NAME = 'SelectionPopoverArrow'

// type SelectionArrowElement = React.ElementRef<typeof Selection.Arrow>
// type SelectionArrowProps = React.ComponentPropsWithoutRef<typeof Selection.Arrow>

// interface SelectionPopoverArrowProps extends SelectionArrowProps {}

// const SelectionPopoverArrow = React.forwardRef<SelectionArrowElement, SelectionPopoverArrowProps>(
//   (props, ref) => {
//     const { className, ...arrowProps } = props

//     return (
//       <Selection.Arrow
//         ref={ref}
//         className={cn(
//           'fill-white w-4 h-4 rounded-sm',
//           'data-[state=open]:animate-arrow-show data-[state=closed]:animate-arrow-hide',
//           className,
//         )}
//         {...arrowProps}
//       />
//     )
//   },
// )

// SelectionPopoverArrow.displayName = SELECTION_POPOVER_ARROW_NAME

/* -----------------------------------------------------------------------------
 *  Exports
 * ----------------------------------------------------------------------------*/

export const SelectionPopover = Object.assign(
  {},
  {
    Root: SelectionPopoverRoot,
    Trigger: SelectionPopoverTrigger,
    Content: SelectionPopoverContent,
    // Arrow: SelectionPopoverArrow,
  },
)
