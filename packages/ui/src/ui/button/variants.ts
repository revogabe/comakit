import { tv } from 'tailwind-variants'
import { cn } from '@/utils/cn'

export const button = tv({
  slots: {
    base: 'flex justify-center cursor-default select-none active:scale-[0.98] items-center gap-2 rounded-lg font-semibold outline-none transition-all ease-in-out duration-100 disabled:pointer-events-none disabled:bg-elements disabled:border-border disabled:border disabled:shadow-none disabled:text-placeholder disabled:to-transparent disabled:from-transparent disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    loader: '',
  },
  variants: {
    variant: {
      primary: cn(
        'text-primary-foreground hover:bg-primary-hover border border-primary-border bg-primary',
        'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
      ),
      secondary: cn(
        'border border-border text-foreground bg-elements hover:bg-secondary hover:opacity-90',
        'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
      ),
      ghost:
        'text-foreground bg-transparent border border-transparent hover:bg-elements focus-visible:bg-elements',
      outline: cn(
        'text-foreground border border-border bg-transparent hover:bg-elements hover:opacity-90',
        'shadow-[0px_0px_0px_1.2px_theme(colors.background)]',
      ),
      danger: cn(
        'text-danger-foreground hover:bg-danger-hover border bg-danger border-danger-border',
        'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
      ),
      success: cn(
        'text-success-foreground hover:bg-success-hover border bg-success border-success-border',
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
