/* ----------------------------------------------------------------------------
 * Imports
 * ---------------------------------------------------------------------------*/

import * as React from 'react'
import { cn } from '../../utils/cn'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons'

/* ----------------------------------------------------------------------------
 * Extend Primitives Radix
 * ---------------------------------------------------------------------------*/

const DropdownRoot = DropdownPrimitive.Root
const DropdownGroup = DropdownPrimitive.Group
const DropdownPortal = DropdownPrimitive.Portal
const DropdownSub = DropdownPrimitive.Sub
const DropdownRadioGroup = DropdownPrimitive.RadioGroup

/* ----------------------------------------------------------------------------
 * Dropdown - Trigger
 * ---------------------------------------------------------------------------*/

const TRIGGER_NAME = 'DropdownTrigger'

type DropdownTriggerElement = React.ElementRef<typeof DropdownPrimitive.Trigger>
type DropdownTriggerProps = React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Trigger>

const DropdownTrigger = React.forwardRef<DropdownTriggerElement, DropdownTriggerProps>(
  (props, ref) => {
    const { asChild = true, ...triggerProps } = props

    return <DropdownPrimitive.Trigger ref={ref} asChild={asChild} {...triggerProps} />
  },
)

DropdownTrigger.displayName = TRIGGER_NAME

/* ----------------------------------------------------------------------------
 * Dropdown - SubTrigger
 * ---------------------------------------------------------------------------*/

const SUBTRIGGER_NAME = 'DropdownTrigger'

type DropdownSubTriggerElement = React.ElementRef<typeof DropdownPrimitive.SubTrigger>
type DropdownSubTriggerPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.SubTrigger
>

interface DropdownSubTriggerProps extends DropdownSubTriggerPrimitiveProps {
  inset?: boolean
}

const DropdownSubTrigger = React.forwardRef<DropdownSubTriggerElement, DropdownSubTriggerProps>(
  (props, ref) => {
    const { className, inset, children, ...subTriggerProps } = props

    return (
      <DropdownPrimitive.SubTrigger
        ref={ref}
        className={cn(
          'flex cursor-default select-none items-center rounded px-2 py-1.5 text-sm outline-none focus:bg-elements data-[state=open]:bg-elements',
          inset && 'pl-8',
          className,
        )}
        {...subTriggerProps}
      >
        {children}
        <ChevronRightIcon className="ml-auto h-4 w-4" />
      </DropdownPrimitive.SubTrigger>
    )
  },
)

DropdownSubTrigger.displayName = SUBTRIGGER_NAME

/* ----------------------------------------------------------------------------
 * Dropdown - SubContent
 * ---------------------------------------------------------------------------*/

const SUBCONTENT_NAME = 'DropdownSubContent'

type DropdownSubContentElement = React.ElementRef<typeof DropdownPrimitive.SubContent>
type DropdownSubContentPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.SubContent
>

const DropdownSubContent = React.forwardRef<
  DropdownSubContentElement,
  DropdownSubContentPrimitiveProps
>((props, ref) => {
  const { className, ...subContentProps } = props

  return (
    <DropdownPrimitive.SubContent
      ref={ref}
      className={cn(
        'min-w-[8rem] overflow-hidden rounded-md border bg-secondary p-1 text-popover-foreground data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade data-[side=right]:animate-slide-left-fade data-[side=top]:animate-slide-down-fade',
        'data-[state=closed]:animate-dropdown-hide',
        'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
        className,
      )}
      {...subContentProps}
    />
  )
})

DropdownSubContent.displayName = SUBCONTENT_NAME

/* ----------------------------------------------------------------------------
 * Dropdown - Content
 * ---------------------------------------------------------------------------*/

const CONTENT_NAME = 'DropdownContent'

type DropdownContentElement = React.ElementRef<typeof DropdownPrimitive.Content>
type DropdownContentPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.Content
>

const DropdownContent = React.forwardRef<DropdownContentElement, DropdownContentPrimitiveProps>(
  (props, ref) => {
    const { className, sideOffset = 6, ...contentProps } = props

    return (
      <DropdownPrimitive.Portal>
        <DropdownPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          className={cn(
            // General styles
            'flex flex-col overflow-hidden',
            'min-w-[8rem] rounded-lg border border-border bg-secondary p-1 text-foreground',
            'origin-[--radix-dropdown--content-transform-origin]',
            'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
            // Animations
            'data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade data-[state=closed]:animate-dropdown-hide',
            className,
          )}
          {...contentProps}
        />
      </DropdownPrimitive.Portal>
    )
  },
)

DropdownContent.displayName = CONTENT_NAME

/* ----------------------------------------------------------------------------
 * Dropdown - Item
 * ---------------------------------------------------------------------------*/

const ITEM_NAME = 'DropdownItem'

type DropdownItemElement = React.ElementRef<typeof DropdownPrimitive.Item>
type DropdownItemPrimitiveProps = React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>

interface DropdownItemProps extends DropdownItemPrimitiveProps {
  inset?: boolean
}

const DropdownItem = React.forwardRef<DropdownItemElement, DropdownItemProps>((props, ref) => {
  const { className, inset, ...itemProps } = props

  return (
    <DropdownPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex h-8 cursor-default select-none items-center justify-between rounded px-3 text-sm outline-none transition-colors duration-150 ease-out',
        'data-[highlighted]:bg-elements data-[highlighted]:text-foreground',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className,
      )}
      {...itemProps}
    />
  )
})

DropdownItem.displayName = ITEM_NAME

/* ----------------------------------------------------------------------------
 * Dropdown - CheckboxItem
 * ---------------------------------------------------------------------------*/

const CHECKBOX_ITEM_NAME = 'DropdownCheckboxItem'

type DropdownCheckboxItemElement = React.ElementRef<typeof DropdownPrimitive.CheckboxItem>
type DropdownCheckboxItemPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.CheckboxItem
>

const DropdownCheckboxItem = React.forwardRef<
  DropdownCheckboxItemElement,
  DropdownCheckboxItemPrimitiveProps
>((props, ref) => {
  const { className, children, checked, ...checkboxProps } = props

  return (
    <DropdownPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-primary focus:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      checked={checked}
      {...checkboxProps}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </DropdownPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownPrimitive.CheckboxItem>
  )
})

DropdownCheckboxItem.displayName = CHECKBOX_ITEM_NAME

/* ----------------------------------------------------------------------------
 * Dropdown - RadioItem
 * ---------------------------------------------------------------------------*/

const RADIO_ITEM_NAME = 'DropdownRadioItem'

type DropdownRadioItemElement = React.ElementRef<typeof DropdownPrimitive.RadioItem>
type DropdownRadioItemPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.RadioItem
>

const DropdownRadioItem = React.forwardRef<
  DropdownRadioItemElement,
  DropdownRadioItemPrimitiveProps
>((props, ref) => {
  const { className, children, ...radioProps } = props

  return (
    <DropdownPrimitive.RadioItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-primary focus:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...radioProps}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownPrimitive.ItemIndicator>
          <DotFilledIcon className="h-4 w-4 fill-current" />
        </DropdownPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownPrimitive.RadioItem>
  )
})

DropdownRadioItem.displayName = RADIO_ITEM_NAME

/* ----------------------------------------------------------------------------
 * Dropdown - Label
 * ---------------------------------------------------------------------------*/

const LABEL_NAME = 'DropdownLabel'

type DropdownLabelElement = React.ElementRef<typeof DropdownPrimitive.Label>
type DropdownLabelPrimitiveProps = React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label>

interface DropdownLabelProps extends DropdownLabelPrimitiveProps {
  inset?: boolean
}

const DropdownLabel = React.forwardRef<DropdownLabelElement, DropdownLabelProps>((props, ref) => {
  const { className, inset, ...labelProps } = props

  return (
    <DropdownPrimitive.Label
      ref={ref}
      className={cn(
        'px-2 py-1.5 text-sm font-semibold text-foreground',
        inset && 'pl-8',
        className,
      )}
      {...labelProps}
    />
  )
})

DropdownLabel.displayName = LABEL_NAME

/* ----------------------------------------------------------------------------
 * Dropdown - Separator
 * ---------------------------------------------------------------------------*/

const SEPARATOR_NAME = 'DropdownSeparator'

type DropdownSeparatorElement = React.ElementRef<typeof DropdownPrimitive.Separator>
type DropdownSeparatorPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.Separator
>

const DropdownSeparator = React.forwardRef<
  DropdownSeparatorElement,
  DropdownSeparatorPrimitiveProps
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className={cn('-mx-2 my-1 h-px bg-border', className)}
    {...props}
  />
))

DropdownSeparator.displayName = SEPARATOR_NAME

/* ----------------------------------------------------------------------------
 * Dropdown - Shortcut
 * ---------------------------------------------------------------------------*/

const SHORTCUT_NAME = 'DropdownShortcut'

type DropdownShortcutElement = React.ComponentProps<'span'>

const DropdownShortcut = ({ className, ...props }: DropdownShortcutElement) => {
  return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
}

DropdownShortcut.displayName = SHORTCUT_NAME

/* ----------------------------------------------------------------------------
 * Export
 * ---------------------------------------------------------------------------*/

export const Dropdown = Object.assign(
  {},
  {
    Root: DropdownRoot,
    Trigger: DropdownTrigger,
    Portal: DropdownPortal,
    Content: DropdownContent,
    Item: DropdownItem,
    CheckboxItem: DropdownCheckboxItem,
    RadioItem: DropdownRadioItem,
    Label: DropdownLabel,
    Separator: DropdownSeparator,
    Shortcut: DropdownShortcut,
    Group: DropdownGroup,
    Sub: DropdownSub,
    SubContent: DropdownSubContent,
    SubTrigger: DropdownSubTrigger,
    RadioGroup: DropdownRadioGroup,
  },
)
