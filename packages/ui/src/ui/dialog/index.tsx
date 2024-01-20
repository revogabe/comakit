/* -----------------------------------------------------------------------------
 * Imports
 * ----------------------------------------------------------------------------*/

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '../../utils/cn'

/* -----------------------------------------------------------------------------
 *  Extend Primitives Radix
 * ----------------------------------------------------------------------------*/

const DialogRoot = DialogPrimitive.Root
const DialogPortal = DialogPrimitive.Portal

/* ----------------------------------------------------------------------------
 * Dialog - Trigger
 * ---------------------------------------------------------------------------*/

const TRIGGER_NAME = 'DialogTrigger'

type DialogTriggerElement = React.ElementRef<typeof DialogPrimitive.Trigger>
type DialogTriggerProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>

const DialogTrigger = React.forwardRef<DialogTriggerElement, DialogTriggerProps>((props, ref) => {
  const { asChild = true, ...triggerProps } = props

  return <DialogPrimitive.Trigger ref={ref} asChild={asChild} {...triggerProps} />
})

DialogTrigger.displayName = TRIGGER_NAME

/* -----------------------------------------------------------------------------
 * Dialog - Overlay
 * ----------------------------------------------------------------------------*/

const OVERLAY_NAME = 'DialogOverlay'

type DialogOverlayElement = React.ElementRef<typeof DialogPrimitive.Overlay>
type DialogOverlayProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>

const DialogOverlay = React.forwardRef<DialogOverlayElement, DialogOverlayProps>((props, ref) => {
  const { className, ...overlayProps } = props

  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        'fixed inset-0 z-20 grid place-items-center overflow-y-auto bg-background/80',
        'data-[state=open]:animate-overlay-show data-[state=closed]:animate-overlay-hide',
        className,
      )}
      {...overlayProps}
    />
  )
})

DialogOverlay.displayName = OVERLAY_NAME

/* ----------------------------------------------------------------------------
 * Dialog - Content
 * ---------------------------------------------------------------------------*/

const CONTENT_NAME = 'DialogContent'

type DialogContentElement = React.ElementRef<typeof DialogPrimitive.Content>
type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>

const DialogContent = React.forwardRef<DialogContentElement, DialogContentProps>((props, ref) => {
  const { className, children, ...contentProps } = props

  return (
    <DialogPortal>
      <DialogOverlay>
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            'fixed left-[50%] top-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-6 border bg-secondary p-8 shadow-lg duration-200 sm:rounded-lg',
            'data-[state=open]:animate-content-show data-[state=closed]:animate-content-hide ease-out transition-all',
            className,
          )}
          {...contentProps}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  )
})

DialogContent.displayName = CONTENT_NAME

/* ----------------------------------------------------------------------------
 * Dialog - Header
 * ---------------------------------------------------------------------------*/

const HEADER_NAME = 'DialogHeader'

type DialogHeaderProps = React.ComponentProps<'div'>

const DialogHeader = (props: DialogHeaderProps) => {
  const { className, ...headerProps } = props

  return (
    <div
      className={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
      {...headerProps}
    />
  )
}

DialogHeader.displayName = HEADER_NAME

/* ----------------------------------------------------------------------------
 *  Dialog - Footer
 * ---------------------------------------------------------------------------*/

const FOOTER_NAME = 'DialogFooter'

type DialogFooterProps = React.ComponentProps<'div'>

const DialogFooter = (props: DialogFooterProps) => {
  const { className, ...footerProps } = props

  return (
    <div
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end gap-4', className)}
      {...footerProps}
    />
  )
}

DialogFooter.displayName = FOOTER_NAME

/* ----------------------------------------------------------------------------
 * Dialog - Title
 * ---------------------------------------------------------------------------*/

const TITLE_NAME = 'DialogTitle'

type DialogTitleElement = React.ElementRef<typeof DialogPrimitive.Title>
type DialogTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>

const DialogTitle = React.forwardRef<DialogTitleElement, DialogTitleProps>((props, ref) => {
  const { className, ...titleProps } = props

  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn('text-xl font-semibold leading-none tracking-tight', className)}
      {...titleProps}
    />
  )
})

DialogTitle.displayName = TITLE_NAME

/* ----------------------------------------------------------------------------
 * Dialog - Description
 * ---------------------------------------------------------------------------*/

const DESCRIPTION_NAME = 'DialogDescription'

type DialogDescriptionElement = React.ElementRef<typeof DialogPrimitive.Description>
type DialogDescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>

const DialogDescription = React.forwardRef<DialogDescriptionElement, DialogDescriptionProps>(
  (props, ref) => {
    const { className, ...descriptionProps } = props

    return (
      <DialogPrimitive.Description
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...descriptionProps}
      />
    )
  },
)

DialogDescription.displayName = DESCRIPTION_NAME

/* ----------------------------------------------------------------------------
 * Dialog - Close
 * ---------------------------------------------------------------------------*/

const CLOSE_NAME = 'DialogClose'

type DialogCloseElement = React.ElementRef<typeof DialogPrimitive.Close>
type DialogCloseProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>

const DialogClose = React.forwardRef<DialogCloseElement, DialogCloseProps>((props, ref) => {
  const { asChild = true, ...closeProps } = props

  return <DialogPrimitive.Close ref={ref} asChild={asChild} {...closeProps} />
})

DialogClose.displayName = CLOSE_NAME

/* ----------------------------------------------------------------------------
 * Exports
 * ---------------------------------------------------------------------------*/

export const Dialog = Object.assign(
  {},
  {
    Root: DialogRoot,
    Trigger: DialogTrigger,
    Content: DialogContent,
    Title: DialogTitle,
    Description: DialogDescription,
    Header: DialogHeader,
    Footer: DialogFooter,
    Close: DialogClose,
  },
)
