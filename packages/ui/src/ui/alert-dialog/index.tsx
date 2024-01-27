/* -----------------------------------------------------------------------------
 * Imports
 * ----------------------------------------------------------------------------*/

import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { cn } from '../../utils/cn'

/* -----------------------------------------------------------------------------
 *  Extend Primitives Radix
 * ----------------------------------------------------------------------------*/

const AlertDialogRoot = AlertDialogPrimitive.Root
const AlertDialogPortal = AlertDialogPrimitive.Portal

/* ----------------------------------------------------------------------------
 * AlertDialog - Trigger
 * ---------------------------------------------------------------------------*/

const TRIGGER_NAME = 'AlertDialogTrigger'

type AlertDialogTriggerElement = React.ElementRef<typeof AlertDialogPrimitive.Trigger>
type AlertDialogTriggerProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger>

const AlertDialogTrigger = React.forwardRef<AlertDialogTriggerElement, AlertDialogTriggerProps>(
  (props, ref) => {
    const { asChild = true, ...triggerProps } = props

    return <AlertDialogPrimitive.Trigger ref={ref} asChild={asChild} {...triggerProps} />
  },
)

AlertDialogTrigger.displayName = TRIGGER_NAME

/* -----------------------------------------------------------------------------
 * AlertDialog - Overlay
 * ----------------------------------------------------------------------------*/

const OVERLAY_NAME = 'AlertDialogOverlay'

type AlertDialogOverlayElement = React.ElementRef<typeof AlertDialogPrimitive.Overlay>
type AlertDialogOverlayProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>

const AlertDialogOverlay = React.forwardRef<AlertDialogOverlayElement, AlertDialogOverlayProps>(
  (props, ref) => {
    const { className, ...overlayProps } = props

    return (
      <AlertDialogPrimitive.Overlay
        ref={ref}
        className={cn(
          'fixed inset-0 z-20 grid place-items-center overflow-y-auto bg-background/80',
          'data-[state=open]:animate-overlay-show data-[state=closed]:animate-overlay-hide',
          className,
        )}
        {...overlayProps}
      />
    )
  },
)

AlertDialogOverlay.displayName = OVERLAY_NAME

/* ----------------------------------------------------------------------------
 * AlertDialog - Content
 * ---------------------------------------------------------------------------*/

const CONTENT_NAME = 'AlertDialogContent'

type AlertDialogContentElement = React.ElementRef<typeof AlertDialogPrimitive.Content>
type AlertDialogContentProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>

const AlertDialogContent = React.forwardRef<AlertDialogContentElement, AlertDialogContentProps>(
  (props, ref) => {
    const { className, children, ...contentProps } = props

    return (
      <AlertDialogPortal>
        <AlertDialogOverlay>
          <AlertDialogPrimitive.Content
            ref={ref}
            className={cn(
              'fixed left-[50%] top-[50%] z-50 grid w-full max-w-md rounded-lg translate-x-[-50%] translate-y-[-50%] gap-6 border bg-secondary p-6 shadow-lg duration-200 sm:rounded-lg',
              'data-[state=open]:animate-content-show data-[state=closed]:animate-content-hide ease-out transition-all',
              className,
            )}
            {...contentProps}
          >
            {children}
          </AlertDialogPrimitive.Content>
        </AlertDialogOverlay>
      </AlertDialogPortal>
    )
  },
)

AlertDialogContent.displayName = CONTENT_NAME

/* ----------------------------------------------------------------------------
 * AlertDialog - Header
 * ---------------------------------------------------------------------------*/

const HEADER_NAME = 'AlertDialogHeader'

type AlertDialogHeaderProps = React.ComponentProps<'div'>

const AlertDialogHeader = (props: AlertDialogHeaderProps) => {
  const { className, ...headerProps } = props

  return (
    <div
      className={cn('flex flex-col space-y-4 text-center sm:text-left', className)}
      {...headerProps}
    />
  )
}

AlertDialogHeader.displayName = HEADER_NAME

/* ----------------------------------------------------------------------------
 *  AlertDialog - Footer
 * ---------------------------------------------------------------------------*/

const FOOTER_NAME = 'AlertDialogFooter'

type AlertDialogFooterProps = React.ComponentProps<'div'>

const AlertDialogFooter = (props: AlertDialogFooterProps) => {
  const { className, ...footerProps } = props

  return (
    <div
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end gap-4', className)}
      {...footerProps}
    />
  )
}

AlertDialogFooter.displayName = FOOTER_NAME

/* ----------------------------------------------------------------------------
 * AlertDialog - Title
 * ---------------------------------------------------------------------------*/

const TITLE_NAME = 'AlertDialogTitle'

type AlertDialogTitleElement = React.ElementRef<typeof AlertDialogPrimitive.Title>
type AlertDialogTitleProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>

const AlertDialogTitle = React.forwardRef<AlertDialogTitleElement, AlertDialogTitleProps>(
  (props, ref) => {
    const { className, ...titleProps } = props

    return (
      <AlertDialogPrimitive.Title
        ref={ref}
        className={cn('text-xl font-semibold leading-none tracking-tight', className)}
        {...titleProps}
      />
    )
  },
)

AlertDialogTitle.displayName = TITLE_NAME

/* ----------------------------------------------------------------------------
 * AlertDialog - Description
 * ---------------------------------------------------------------------------*/

const DESCRIPTION_NAME = 'AlertDialogDescription'

type AlertDialogDescriptionElement = React.ElementRef<typeof AlertDialogPrimitive.Description>
type AlertDialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
>

const AlertDialogDescription = React.forwardRef<
  AlertDialogDescriptionElement,
  AlertDialogDescriptionProps
>((props, ref) => {
  const { className, ...descriptionProps } = props

  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...descriptionProps}
    />
  )
})

AlertDialogDescription.displayName = DESCRIPTION_NAME

/* ----------------------------------------------------------------------------
 * AlertDialog - Cancel
 * ---------------------------------------------------------------------------*/

const CANCEL_NAME = 'AlertDialogCancel'

type AlertDialogCancelElement = React.ElementRef<typeof AlertDialogPrimitive.AlertDialogCancel>
type AlertDialogCancelProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.AlertDialogCancel
>

const AlertDialogCancel = React.forwardRef<AlertDialogCancelElement, AlertDialogCancelProps>(
  (props, ref) => {
    const { asChild = true, ...cancelProps } = props

    return <AlertDialogPrimitive.AlertDialogCancel ref={ref} asChild={asChild} {...cancelProps} />
  },
)

AlertDialogCancel.displayName = CANCEL_NAME

/* ----------------------------------------------------------------------------
 * AlertDialog - Cancel
 * ---------------------------------------------------------------------------*/

const ACTION_NAME = 'AlertDialogAction'

type AlertDialogActionElement = React.ElementRef<typeof AlertDialogPrimitive.AlertDialogAction>
type AlertDialogActionProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.AlertDialogAction
>

const AlertDialogAction = React.forwardRef<AlertDialogActionElement, AlertDialogActionProps>(
  (props, ref) => {
    const { asChild = true, ...actionProps } = props

    return <AlertDialogPrimitive.AlertDialogAction ref={ref} asChild={asChild} {...actionProps} />
  },
)

AlertDialogAction.displayName = ACTION_NAME

/* ----------------------------------------------------------------------------
 * Exports
 * ---------------------------------------------------------------------------*/

export const AlertDialog = Object.assign(
  {},
  {
    Root: AlertDialogRoot,
    Trigger: AlertDialogTrigger,
    Content: AlertDialogContent,
    Title: AlertDialogTitle,
    Description: AlertDialogDescription,
    Header: AlertDialogHeader,
    Footer: AlertDialogFooter,
    Action: AlertDialogAction,
    Cancel: AlertDialogCancel,
  },
)
