import * as React from 'react';
import { cn } from '../../utils/cn';

export interface TextFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  unstyled?: boolean;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { type, className, unstyled = false, ...inputProps } = props;
  return (
    <input
      type={type}
      className={cn(
        !unstyled &&
          'flex h-10 w-full rounded-lg border border-input bg-elements px-4 text-[13px] outline-none transition-all duration-150 ease-out placeholder:text-placeholder',
        !unstyled && 'file:border-0 file:bg-transparent file:text-sm file:font-medium',
        !unstyled && 'disabled:cursor-not-allowed disabled:opacity-50',
        !unstyled &&
          'focus-visible:bg-transparent focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        unstyled && 'h-full w-full bg-transparent px-4 outline-none',
        className,
      )}
      ref={ref}
      {...inputProps}
    />
  );
});
TextField.displayName = 'TextField';

export { TextField };
