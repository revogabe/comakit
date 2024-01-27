/* ----------------------------------------------------------------------------
 * Imports
 * --------------------------------------------------------------------------*/

import * as React from 'react'
import { cn } from '../../utils/cn'
import { textfield } from './variants'
import type { VariantProps } from 'tailwind-variants'

/* ----------------------------------------------------------------------------
 * TextField
 * --------------------------------------------------------------------------*/

type TextFieldElement = React.ComponentRef<'input'>
type TextFieldPrimitiveProps = React.ComponentPropsWithoutRef<'input'>
type TextFieldVariants = VariantProps<typeof textfield>

export interface TextFieldProps extends TextFieldVariants, Omit<TextFieldPrimitiveProps, 'size'> {
  unstyled?: boolean
}

const TextField = React.forwardRef<TextFieldElement, TextFieldProps>((props, ref) => {
  const { className, type, size, unstyled: unstyledProp, disabled, ...textFieldProps } = props
  const { base, unstyled } = textfield({ size })

  return (
    <input
      ref={ref}
      disabled={disabled}
      type={type}
      className={cn(unstyledProp ? unstyled({ className }) : base({ className }))}
      {...textFieldProps}
    />
  )
})

TextField.displayName = 'TextField'

/* ----------------------------------------------------------------------------
 * Exports
 * --------------------------------------------------------------------------*/

export { TextField, textfield as textFieldVariants }
