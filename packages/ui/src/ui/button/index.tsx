/* ----------------------------------------------------------------------------
 * Imports
 * --------------------------------------------------------------------------*/

import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { type VariantProps } from 'tailwind-variants'
import { button } from './variants'
import { cn } from '@/utils/cn'
import { Spinner } from '../../icons/spinner'

/* -----------------------------------------------------------------------------
 * Button Types
 * ---------------------------------------------------------------------------*/

type ButtonElement = React.ElementRef<'button'>
type ButtonPrimitiveProps = React.ComponentPropsWithoutRef<'button'>
type ButtonVariants = VariantProps<typeof button>

export interface ButtonProps extends ButtonPrimitiveProps, ButtonVariants {
  asChild?: boolean
  isLoading?: boolean
}

/* ----------------------------------------------------------------------------
 * Component
 * ---------------------------------------------------------------------------*/

const Button = React.forwardRef<ButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant,
    size,
    slot,
    asChild = false,
    isLoading,
    children,
    disabled,
    ...buttonProps
  } = props
  const Comp = asChild ? Slot : 'button'

  const { base, loader } = button({ variant, size })

  return (
    <Comp disabled={disabled} className={cn(base({ className }))} ref={ref} {...buttonProps}>
      {isLoading && <Spinner width={14} height={14} className={loader()} />}
      <Slottable>{children}</Slottable>
    </Comp>
  )
})

Button.displayName = 'Button'

/* ----------------------------------------------------------------------------
 * Export
 * ---------------------------------------------------------------------------*/

export { Button }
