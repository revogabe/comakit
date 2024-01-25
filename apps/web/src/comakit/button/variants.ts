import { tv } from 'tailwind-variants'
import { cn } from '@/utils/cn'

export const button = tv({
  slots: {
    base: 'disabled:bg-elements disabled:border-border disabled:text-placeholder focus-visible:ring-primary focus-visible:ring-offset-background flex cursor-default select-none items-center justify-center gap-2 rounded-lg font-semibold outline-none transition-all duration-100 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:border disabled:from-transparent disabled:to-transparent disabled:opacity-50 disabled:shadow-none',
    loader: '',
  },
  variants: {
    variant: {
      primary: cn(
        'text-primary-foreground hover:bg-primary-hover border-primary-border bg-primary border',
        'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
      ),
      secondary: cn(
        'border-border text-foreground bg-elements hover:bg-secondary border hover:opacity-90',
        'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
      ),
      ghost:
        'text-foreground hover:bg-elements focus-visible:bg-elements border border-transparent bg-transparent',
      outline: cn(
        'text-foreground border-border hover:bg-elements border bg-transparent hover:opacity-90',
        'shadow-[0px_0px_0px_1.2px_theme(colors.background)]',
      ),
      danger: cn(
        'text-danger-foreground hover:bg-danger-hover bg-danger border-danger-border border',
        'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
      ),
      success: cn(
        'text-success-foreground hover:bg-success-hover bg-success border-success-border border',
        'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
      ),
    },
    size: {
      default: 'h-9 px-5 text-sm',
      sm: 'h-8 px-5 text-xs',
      lg: 'h-10 px-8 text-base',
      icon: 'h-9 w-9',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})
