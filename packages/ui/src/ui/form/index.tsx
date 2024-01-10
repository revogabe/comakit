'use client';

import React from 'react';
import { Primitive } from '@radix-ui/react-primitive';
import { Slot } from '@radix-ui/react-slot';

import { variants } from './variants';
import { createContext } from '../../utils/create-context';
import { TextField } from '../text-field';

const { field, label, controlGroup, controlLeading, hint, error } = variants();

/* -------------------------------------------------------------------------------------------------
 * FormFieldRoot
 * -----------------------------------------------------------------------------------------------*/

const FIELD_NAME = 'FormField';

type FormFieldContextValue = {
  id: string;
  isInvalid: boolean;
  isOptional: boolean;
  hasControlGroup: boolean;
  onHasControlGroupChange: (value: boolean) => void;
};

const [FormFieldProvider, useFormFieldContext] = createContext<FormFieldContextValue>(FIELD_NAME);

type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
export interface FormFieldProps extends PrimitiveDivProps {
  id?: string;
  isInvalid?: boolean;
  isOptional?: boolean;
}

export const Field = React.forwardRef<HTMLDivElement, FormFieldProps>((props, ref) => {
  const { id: idProp, isInvalid = false, isOptional = false, className, ...rootProps } = props;
  const [hasControlGroup, setHasControlGroup] = React.useState(false);
  const id = React.useId();

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
  );
});

Field.displayName = FIELD_NAME;

/* -------------------------------------------------------------------------------------------------
 * FormFieldLabel
 * -----------------------------------------------------------------------------------------------*/

const LABEL_NAME = 'FormLabel';

type FormLabelElement = React.ElementRef<'label'>;
export interface FormLabelProps extends React.ComponentPropsWithoutRef<'label'> {
  trailing?: React.ReactNode;
}

export const Label = React.forwardRef<FormLabelElement, FormLabelProps>((props, ref) => {
  const { className, trailing, children, ...labelProps } = props;
  const context = useFormFieldContext(LABEL_NAME);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <label
          htmlFor={context.id}
          data-invalid={context.isInvalid || undefined}
          {...labelProps}
          ref={ref}
          className={label({ className })}
        >
          {children}
        </label>
        {context.isOptional && (
          <span className="rounded-[4px] border border-border bg-secondary p-1.5 py-0.5 text-[10px] text-muted-foreground">
            Opcional
          </span>
        )}
      </div>
      {trailing}
    </div>
  );
});

Label.displayName = LABEL_NAME;

/* -------------------------------------------------------------------------------------------------
 * FormControlGroup
 * -----------------------------------------------------------------------------------------------*/

const CONTROL_GROUP_NAME = 'FormControlGroup';

type FormControlGroupElement = React.ElementRef<'div'>;
export interface FormControlGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

export const ControlGroup = React.forwardRef<FormControlGroupElement, FormControlGroupProps>(
  (props, ref) => {
    const { asChild = false, className, ...controlGroupProps } = props;
    const context = useFormFieldContext(CONTROL_GROUP_NAME);
    const Component = asChild ? Slot : 'div';

    const { onHasControlGroupChange } = context;
    React.useLayoutEffect(() => {
      onHasControlGroupChange(true);
    }, [onHasControlGroupChange]);

    return <Component className={controlGroup({ className })} {...controlGroupProps} ref={ref} />;
  },
);

ControlGroup.displayName = CONTROL_GROUP_NAME;

/* -------------------------------------------------------------------------------------------------
 * FormControlLeading
 * -----------------------------------------------------------------------------------------------*/

const CONTROL_LEADING_NAME = 'FormControlLeading';

type FormControlLeadingElement = React.ElementRef<'div'>;
export interface FormControlLeadingProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

export const ControlLeading = React.forwardRef<FormControlLeadingElement, FormControlLeadingProps>(
  (props, ref) => {
    const { asChild = false, className, ...controlLeadingProps } = props;
    const Component = asChild ? Slot : 'div';

    return (
      <Component className={controlLeading({ className })} {...controlLeadingProps} ref={ref} />
    );
  },
);

ControlLeading.displayName = CONTROL_LEADING_NAME;

/* -------------------------------------------------------------------------------------------------
 * FormControl
 * -----------------------------------------------------------------------------------------------*/

const CONTROL_NAME = 'FormControl';

type FormControlElement = React.ElementRef<'input'>;
export interface FormControlProps extends React.ComponentPropsWithoutRef<'input'> {
  asChild?: boolean;
}

export const Control = React.forwardRef<FormControlElement, FormControlProps>((props, ref) => {
  const { asChild = false, className, ...controlProps } = props;
  const context = useFormFieldContext(CONTROL_NAME);
  const Component = asChild ? Slot : TextField;

  return (
    <Component
      id={context.id}
      data-invalid={context.isInvalid || undefined}
      unstyled={asChild ? undefined : context.hasControlGroup}
      className="placeholder:text-placeholder"
      {...controlProps}
      ref={ref}
    />
  );
});

Control.displayName = CONTROL_NAME;

/* -------------------------------------------------------------------------------------------------
 * FormHint
 * -----------------------------------------------------------------------------------------------*/

const HINT_NAME = 'FormHint';

type FormHintElement = React.ElementRef<'span'>;
export interface FormHintProps extends React.ComponentPropsWithoutRef<'span'> {}

export const Hint = React.forwardRef<FormHintElement, FormHintProps>((props, ref) => {
  const { className, ...spanProps } = props;
  const context = useFormFieldContext(HINT_NAME);

  return !context.isInvalid ? (
    <span {...spanProps} ref={ref} className={hint({ className })} />
  ) : null;
});

Hint.displayName = HINT_NAME;

/* -------------------------------------------------------------------------------------------------
 * FormError
 * -----------------------------------------------------------------------------------------------*/

const ERROR_NAME = 'FormError';

type FormErrorElement = React.ElementRef<'span'>;
export interface FormErrorProps extends React.ComponentPropsWithoutRef<'span'> {}

export const Error = React.forwardRef<FormErrorElement, FormErrorProps>((props, ref) => {
  const { className, ...spanProps } = props;
  const context = useFormFieldContext(ERROR_NAME);

  return context.isInvalid ? (
    <span {...spanProps} ref={ref} className={error({ className })} />
  ) : null;
});

Error.displayName = ERROR_NAME;

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
);
