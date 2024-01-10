import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cn } from '../../utils/cn';

type DivPrimitiveProps = React.ComponentPropsWithoutRef<'div'>;

export interface CardProps extends DivPrimitiveProps {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, asChild = false, children, ...divProps } = props;
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn(
        'border p-12 rounded-lg bg-secondary gap-4 shadow-black/10 shadow-lg flex flex-col',
        className,
        {},
      )}
      ref={ref}
      {...divProps}
    >
      <Slottable>{children}</Slottable>
    </Comp>
  );
});

Card.displayName = 'Card';

export { Card };
