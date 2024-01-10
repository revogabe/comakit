import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { type VariantProps } from 'tailwind-variants';
import { button } from './variants';
import { Spinner } from '../../icons';
import { cn } from '../../utils/cn';

type ButtonPrimitiveProps = React.ComponentPropsWithoutRef<'button'>;
type ButtonVariants = VariantProps<typeof button>;
export interface ButtonProps extends ButtonPrimitiveProps, ButtonVariants {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant,
    size,
    asChild = false,
    isLoading,
    children,
    disabled,
    ...buttonProps
  } = props;
  const Comp = asChild ? Slot : 'button';

  const { base, loader } = button({ variant, size });

  return (
    <Comp
      disabled={disabled ?? isLoading}
      className={cn(base({ className }))}
      ref={ref}
      {...buttonProps}
    >
      {isLoading && <Spinner className={loader()} />}
      <Slottable>{children}</Slottable>
    </Comp>
  );
});

Button.displayName = 'Button';

export { Button, button as buttonVariants };
