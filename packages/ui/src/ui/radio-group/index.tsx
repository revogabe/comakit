import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '../../utils/cn';

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid grid-cols-2 gap-2.5', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'flex h-10 cursor-default items-center gap-3 rounded-md border border-border bg-elements px-4 text-[13px]',
        className,
      )}
      {...props}
    >
      <div className="flex h-4 w-4 items-center justify-center rounded-full border border-border p-[3px]">
        <RadioGroupPrimitive.Indicator className="h-full w-full rounded-full bg-primary" />
      </div>
      {children}
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export const RadioGroup = Object.assign(
  {},
  {
    Root: RadioGroupRoot,
    Item: RadioGroupItem,
  },
);
