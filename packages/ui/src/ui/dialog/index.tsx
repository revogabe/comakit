import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '../../utils/cn';

const DialogRoot = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;

/* -------------------------------------------------------------------------------------------------
 * DialogTrigger
 * -----------------------------------------------------------------------------------------------*/

type DialogTriggerElement = React.ElementRef<typeof DialogPrimitive.Trigger>;
type DialogTriggerProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>;

const DialogTrigger = React.forwardRef<DialogTriggerElement, DialogTriggerProps>(
  ({ asChild = true, ...props }, ref) => {
    return <DialogPrimitive.Trigger asChild={asChild} {...props} ref={ref} />;
  },
);

DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

/* -------------------------------------------------------------------------------------------------
 * DialogOverlay
 * -----------------------------------------------------------------------------------------------*/

type DialogOverlayElement = React.ElementRef<typeof DialogPrimitive.Overlay>;
type DialogOverlayProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;

const DialogOverlay = React.forwardRef<DialogOverlayElement, DialogOverlayProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        'fixed inset-0 z-20 grid place-items-center overflow-y-auto bg-background/80',
        'data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide',
        className,
      )}
      {...props}
    />
  ),
);

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

/* -------------------------------------------------------------------------------------------------
 * DialogContent
 * -----------------------------------------------------------------------------------------------*/

type DialogContentElement = React.ElementRef<typeof DialogPrimitive.Content>;
type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;

const DialogContent = React.forwardRef<DialogContentElement, DialogContentProps>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay className="px-4">
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-secondary data-[state=open]:animate-contentShow ease-out transition-all p-6 shadow-lg duration-200 sm:rounded-lg data-[state=closed]:animate-contentHide',
            className,
          )}
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  ),
);

DialogContent.displayName = DialogPrimitive.Content.displayName;

/* -------------------------------------------------------------------------------------------------
 * DialogHeader
 * -----------------------------------------------------------------------------------------------*/

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
);

DialogHeader.displayName = 'DialogHeader';

/* -------------------------------------------------------------------------------------------------
 * DialogFooter
 * -----------------------------------------------------------------------------------------------*/

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
);

DialogFooter.displayName = 'DialogFooter';

/* -------------------------------------------------------------------------------------------------
 * DialogTitle
 * -----------------------------------------------------------------------------------------------*/

type DialogTitleElement = React.ElementRef<typeof DialogPrimitive.Title>;
type DialogTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;

const DialogTitle = React.forwardRef<DialogTitleElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
);

DialogTitle.displayName = DialogPrimitive.Title.displayName;

/* -------------------------------------------------------------------------------------------------
 * DialogDescription
 * -----------------------------------------------------------------------------------------------*/

type DialogDescriptionElement = React.ElementRef<typeof DialogPrimitive.Description>;
type DialogDescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;

const DialogDescription = React.forwardRef<DialogDescriptionElement, DialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Description
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  ),
);

DialogDescription.displayName = DialogPrimitive.Description.displayName;

/* -------------------------------------------------------------------------------------------------
 * DialogClose
 * -----------------------------------------------------------------------------------------------*/

type DialogCloseElement = React.ElementRef<typeof DialogPrimitive.Close>;
type DialogCloseProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>;

const DialogClose = React.forwardRef<DialogCloseElement, DialogCloseProps>(
  ({ asChild = true, ...props }, ref) => {
    return <DialogPrimitive.Close asChild={asChild} {...props} ref={ref} />;
  },
);

DialogClose.displayName = DialogPrimitive.Close.displayName;

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
);
