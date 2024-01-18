import { tv } from 'tailwind-variants'
import { cn } from '../../utils/cn'

export const button = tv({
  slots: {
    base: 'flex justify-center cursor-default active:scale-[0.98] items-center gap-2 rounded-lg font-semibold outline-none transition-all ease-in-out duration-100 disabled:pointer-events-none disabled:bg-elements disabled:border-border disabled:border disabled:shadow-none disabled:text-placeholder disabled:to-transparent disabled:from-transparent disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    loader: '',
  },
  variants: {
    variant: {
      primary: cn(
        'text-primary-foreground bg-gradient-to-b from-primary to-primary-hover hover:brightness-75 border border-primary-border',
        'shadow-[0px_0px_0px_1px_theme(colors.primary.DEFAULT),0px_1px_2px_0px_theme(colors.primary.hover)]',
      ),
      secondary: cn(
        'border border-border text-foreground bg-elements hover:bg-secondary hover:opacity-90',
        'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
      ),
      ghost: 'text-foreground bg-transparent hover:bg-elements focus-visible:bg-elements',
      outline: cn(
        'text-foreground border border-border bg-transparent hover:bg-elements hover:opacity-90',
        'shadow-[0px_0px_0px_1.2px_theme(colors.background)]',
      ),
      danger: cn(
        'text-danger-foreground bg-gradient-to-b from-danger to-danger-hover hover:brightness-75 border border-danger-border',
        'shadow-[0px_0px_0px_1px_theme(colors.danger.DEFAULT),0px_1px_2px_0px_theme(colors.danger.DEFAULT)]',
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
