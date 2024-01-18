/* -----------------------------------------------------------------------------
 * Imports
 * ----------------------------------------------------------------------------*/

import * as React from 'react'
import { cn } from '../../utils/cn'
import type { VariantProps } from 'tailwind-variants'
import { card } from './variants'

/* -----------------------------------------------------------------------------
 * Card - Root
 * ----------------------------------------------------------------------------*/

const CARD_NAME = 'CardRoot'

type CardRootElement = React.ElementRef<'div'>
type CardRootProps = React.ComponentPropsWithoutRef<'div'>
type CardVariants = VariantProps<typeof card>

export interface CardProps extends CardRootProps, CardVariants {}

const CardRoot = React.forwardRef<CardRootElement, CardProps>((props, ref) => {
  const { className, size, children, ...cardProps } = props
  const { base } = card({ size })

  return (
    <div ref={ref} className={cn(base({ className }))} {...cardProps}>
      {children}
    </div>
  )
})

CardRoot.displayName = CARD_NAME

/* -----------------------------------------------------------------------------
 * Card - Header
 * ----------------------------------------------------------------------------*/

const HEADER_NAME = 'CardHeader'

type CardHeaderElement = React.ElementRef<'div'>
type CardHeaderProps = React.ComponentPropsWithoutRef<'div'>

const CardHeader = React.forwardRef<CardHeaderElement, CardHeaderProps>((props, ref) => {
  const { className, ...headerProps } = props

  return (
    <div
      ref={ref}
      className={cn('space-y-2 text-center sm:text-left', className)}
      {...headerProps}
    />
  )
})

CardHeader.displayName = HEADER_NAME

/* -----------------------------------------------------------------------------
 * Card - Footer
 * ----------------------------------------------------------------------------*/

const FOOTER_NAME = 'CardFooter'

type CardFooterElement = React.ElementRef<'div'>
type CardFooterProps = React.ComponentPropsWithoutRef<'div'>

const CardFooter = React.forwardRef<CardFooterElement, CardFooterProps>((props, ref) => {
  const { className, ...footerProps } = props

  return (
    <div
      ref={ref}
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end', className)}
      {...footerProps}
    />
  )
})

CardFooter.displayName = FOOTER_NAME

/* -----------------------------------------------------------------------------
 * Card - Title
 * ----------------------------------------------------------------------------*/

const TITLE_NAME = 'CardTitle'

type CardTitlerElement = React.ElementRef<'h3'>
type CardTitlerProps = React.ComponentPropsWithoutRef<'h3'>

const CardTitle = React.forwardRef<CardTitlerElement, CardTitlerProps>((props, ref) => {
  const { className, ...titleProps } = props

  return (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold leading-none tracking-tight', className)}
      {...titleProps}
    />
  )
})
CardTitle.displayName = TITLE_NAME

/* -----------------------------------------------------------------------------
 * Card - Description
 * ----------------------------------------------------------------------------*/

const DESCRIPTION = 'CardDescription'

type CardDescriptionrElement = React.ElementRef<'p'>
type CardDescriptionrProps = React.ComponentPropsWithoutRef<'p'>

const CardDescription = React.forwardRef<CardDescriptionrElement, CardDescriptionrProps>(
  (props, ref) => {
    const { className, ...descriptionProps } = props

    return (
      <p
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...descriptionProps}
      />
    )
  },
)

CardDescription.displayName = DESCRIPTION

export const Card = Object.assign(
  {},
  {
    Root: CardRoot,
    Header: CardHeader,
    Footer: CardFooter,
    Title: CardTitle,
    Description: CardDescription,
  },
)
