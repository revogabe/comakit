/* ----------------------------------------------------------------------------
 * Imports
 * --------------------------------------------------------------------------*/

import * as React from 'react'
import { cn } from '../../utils/cn'
import { textarea } from './variants'
import type { VariantProps } from 'tailwind-variants'
import TextareaAutosize from 'react-textarea-autosize'

/* ----------------------------------------------------------------------------
 * Textarea
 * --------------------------------------------------------------------------*/

type TextareaElement = React.ComponentRef<typeof TextareaAutosize>
type TextareaPrimitiveProps = React.ComponentPropsWithoutRef<typeof TextareaAutosize>
type TextareaVariants = VariantProps<typeof textarea>

export interface TextareaProps extends TextareaVariants, Omit<TextareaPrimitiveProps, 'size'> {
  unstyled?: boolean
}

const Textarea = React.forwardRef<TextareaElement, TextareaProps>((props, ref) => {
  const { className, unstyled: unstyledProp, minRows = 3, disabled, ...TextareaProps } = props
  const { base, unstyled } = textarea()

  return (
    <TextareaAutosize
      ref={ref}
      disabled={disabled}
      minRows={minRows}
      className={cn(unstyledProp ? unstyled({ className }) : base({ className }))}
      {...TextareaProps}
    />
  )
})

Textarea.displayName = 'Textarea'

/* ----------------------------------------------------------------------------
 * Exports
 * --------------------------------------------------------------------------*/

export { Textarea, Textarea as TextareaVariants }
