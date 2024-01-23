/* ----------------------------------------------------------------------------
 * Imports
 * --------------------------------------------------------------------------*/

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'tailwind-variants'
import { link } from './variants'
import { cn } from '../../utils/cn'

/* -----------------------------------------------------------------------------
 * NavLink Types
 * ---------------------------------------------------------------------------*/

type NavLinkElement = React.ElementRef<'a'>
type NavLinkPrimitiveProps = React.ComponentPropsWithoutRef<'a'>
type NavLinkVariants = VariantProps<typeof link>

export interface NavLinkProps extends NavLinkPrimitiveProps, NavLinkVariants {
  asChild?: boolean
}

/* ----------------------------------------------------------------------------
 * Component
 * ---------------------------------------------------------------------------*/

const NavLink = React.forwardRef<NavLinkElement, NavLinkProps>((props, ref) => {
  const { className, variant, size, slot, asChild = false, children, ...navLinkProps } = props
  const Comp = asChild ? Slot : 'a'

  const { base } = link({ variant, size })

  return (
    <Comp ref={ref} className={cn(base({ className }))} {...navLinkProps}>
      {children}
    </Comp>
  )
})

NavLink.displayName = 'NavLink'

/* ----------------------------------------------------------------------------
 * Export
 * ---------------------------------------------------------------------------*/

export { NavLink }
