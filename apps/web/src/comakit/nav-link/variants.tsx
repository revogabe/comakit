import { tv } from 'tailwind-variants'

export const link = tv({
  slots: {
    base: 'hover:underline focus:underline focus:outline-none underline-offset-[6px] duration-200 ease-out',
  },
  variants: {
    variant: {
      primary: 'text-primary hover:text-primary-hover',
      secondary: 'text-foreground hover:text-muted-foreground',
    },
    size: {
      default: 'text-sm',
      sm: 'text-xs',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})
