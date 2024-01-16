/* ----------------------------------------------------------------------------
 * Imports
 * --------------------------------------------------------------------------*/

import React from 'react'
import { Primitive } from '@radix-ui/react-primitive'
import { Slot } from '@radix-ui/react-slot'

import { variants } from './variants'
import { createContext } from '../../utils/create-context'
import { TextField, textFieldVariants, type TextFieldProps } from '../text-field'
import { cn } from '../../utils/cn'

const { field, label, controlGroup, controlLeading, hint, error } = variants()

/* ----------------------------------------------------------------------------
 * Form - Field
 * --------------------------------------------------------------------------*/

type PrimitiveDivElement = React.ElementRef<typeof Primitive.div>
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>
type FormFieldContextValue = {
  id: string
  isInvalid: boolean
  isOptional: boolean
  hasControlGroup: boolean
  onHasControlGroupChange: (value: boolean) => void
}
export interface FormFieldProps extends PrimitiveDivProps {
  id?: string
  isInvalid?: boolean
  isOptional?: boolean
}

/* ----------------------------------------------------------------------------
 * Component Form:Field
 * --------------------------------------------------------------------------*/

const FIELD_NAME = 'FormField'

const [FormFieldProvider, useFormFieldContext] = createContext<FormFieldContextValue>(FIELD_NAME)

export const Field = React.forwardRef<PrimitiveDivElement, FormFieldProps>((props, ref) => {
  const { id: idProp, isInvalid = false, isOptional = false, className, ...rootProps } = props
  const [hasControlGroup, setHasControlGroup] = React.useState(false)
  const id = React.useId()

  return (
    <FormFieldProvider
      id={idProp ?? id}
      isInvalid={isInvalid}
      isOptional={isOptional}
      hasControlGroup={hasControlGroup}
      onHasControlGroupChange={setHasControlGroup}
    >
      <Primitive.div {...rootProps} ref={ref} className={field({ className })} />
    </FormFieldProvider>
  )
})

Field.displayName = FIELD_NAME

/* -------------------------------------------------------------------------------------------------
 * Form - Label
 * -----------------------------------------------------------------------------------------------*/

type FormLabelElement = React.ElementRef<'label'>
export interface FormLabelProps extends React.ComponentPropsWithoutRef<'label'> {
  trailing?: React.ReactNode
}

/* -------------------------------------------------------------------------------------------------
 * Component Form:Label
 * -----------------------------------------------------------------------------------------------*/

const LABEL_NAME = 'FormLabel'

export const Label = React.forwardRef<FormLabelElement, FormLabelProps>((props, ref) => {
  const { className, trailing, children, ...labelProps } = props
  const context = useFormFieldContext(LABEL_NAME)

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <label
          ref={ref}
          htmlFor={context.id}
          data-invalid={context.isInvalid || undefined}
          className={label({ className })}
          {...labelProps}
        >
          {children}
        </label>
        {context.isOptional && (
          <span className="rounded border border-border bg-secondary p-1.5 py-0.5 text-[10px] text-muted-foreground">
            Opcional
          </span>
        )}
      </div>
      {trailing}
    </div>
  )
})

Label.displayName = LABEL_NAME

/* -------------------------------------------------------------------------------------------------
 * Form - ControlGroup
 * -----------------------------------------------------------------------------------------------*/

type FormControlGroupElement = React.ElementRef<'div'>
export interface FormControlGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

/* -------------------------------------------------------------------------------------------------
 * Component Form:ControlGroup
 * -----------------------------------------------------------------------------------------------*/

const CONTROL_GROUP_NAME = 'FormControlGroup'

export const ControlGroup = React.forwardRef<FormControlGroupElement, FormControlGroupProps>(
  (props, ref) => {
    const { asChild = false, className, ...controlGroupProps } = props
    const context = useFormFieldContext(CONTROL_GROUP_NAME)
    const Component = asChild ? Slot : 'div'
    const { onHasControlGroupChange } = context

    /* Notify the parent `FormField` that it has a `ControlGroup` child */
    React.useLayoutEffect(() => {
      onHasControlGroupChange(true)
    }, [onHasControlGroupChange])

    return <Component ref={ref} className={controlGroup({ className })} {...controlGroupProps} />
  },
)

ControlGroup.displayName = CONTROL_GROUP_NAME

/* -------------------------------------------------------------------------------------------------
 * Form - ControlLeading
 * -----------------------------------------------------------------------------------------------*/

type FormControlLeadingElement = React.ElementRef<'div'>
export interface FormControlLeadingProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

/* -------------------------------------------------------------------------------------------------
 * Component Form:ControlLeading
 * -----------------------------------------------------------------------------------------------*/

const CONTROL_LEADING_NAME = 'FormControlLeading'

export const ControlLeading = React.forwardRef<FormControlLeadingElement, FormControlLeadingProps>(
  (props, ref) => {
    const { asChild = false, className, ...controlLeadingProps } = props
    const Component = asChild ? Slot : 'div'

    return (
      <Component className={controlLeading({ className })} {...controlLeadingProps} ref={ref} />
    )
  },
)

ControlLeading.displayName = CONTROL_LEADING_NAME

/* -------------------------------------------------------------------------------------------------
 * Form - Control
 * -----------------------------------------------------------------------------------------------*/

type FormControlElement = React.ElementRef<'input'>
export interface FormControlProps extends TextFieldProps {
  asChild?: boolean
}

/* -------------------------------------------------------------------------------------------------
 * Component Form:Control
 * -----------------------------------------------------------------------------------------------*/

const CONTROL_NAME = 'FormControl'

export const Control = React.forwardRef<FormControlElement, FormControlProps>((props, ref) => {
  const { asChild = false, className, size, ...controlProps } = props
  const context = useFormFieldContext(CONTROL_NAME)
  const Component = asChild ? Slot : TextField

  const { base } = textFieldVariants({ size })

  return (
    <Component
      ref={ref}
      id={context.id}
      data-invalid={context.isInvalid || undefined}
      className={cn(base({ className }))}
      {...controlProps}
    />
  )
})

Control.displayName = CONTROL_NAME

/* -------------------------------------------------------------------------------------------------
 * Form - Hint
 * -----------------------------------------------------------------------------------------------*/

type FormHintElement = React.ElementRef<'span'>
export interface FormHintProps extends React.ComponentPropsWithoutRef<'span'> {}

/* -------------------------------------------------------------------------------------------------
 * Component Form:Hint
 * -----------------------------------------------------------------------------------------------*/

const HINT_NAME = 'FormHint'

export const Hint = React.forwardRef<FormHintElement, FormHintProps>((props, ref) => {
  const { className, ...spanProps } = props
  const context = useFormFieldContext(HINT_NAME)

  return !context.isInvalid ? (
    <span ref={ref} className={hint({ className })} {...spanProps} />
  ) : null
})

Hint.displayName = HINT_NAME

/* -------------------------------------------------------------------------------------------------
 * Form - Error
 * -----------------------------------------------------------------------------------------------*/

type FormErrorElement = React.ElementRef<'span'>
export interface FormErrorProps extends React.ComponentPropsWithoutRef<'span'> {}

/* -------------------------------------------------------------------------------------------------
 * Component Form:Error
 * -----------------------------------------------------------------------------------------------*/

const ERROR_NAME = 'FormError'

export const Error = React.forwardRef<FormErrorElement, FormErrorProps>((props, ref) => {
  const { className, ...spanProps } = props
  const context = useFormFieldContext(ERROR_NAME)

  return context.isInvalid ? (
    <span {...spanProps} ref={ref} className={error({ className })} />
  ) : null
})

Error.displayName = ERROR_NAME

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/

export const Form = Object.assign(
  {},
  {
    Field: Field,
    Label: Label,
    ControlGroup: ControlGroup,
    ControlLeading: ControlLeading,
    Control: Control,
    Hint: Hint,
    Error: Error,
  },
)
