import { tv } from 'tailwind-variants'

export const button = tv({
  slots: {
    base: 'flex justify-center cursor-default items-center gap-2 rounded-lg font-semibold outline-none transition-all ease-in-out duration-100 disabled:pointer-events-none disabled:bg-elements disabled:border-border disabled:border disabled:shadow-none disabled:text-placeholder disabled:to-transparent disabled:from-transparent disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    loader: '',
  },
  variants: {
    variant: {
      primary:
        'text-primary-foreground bg-gradient-to-b from-primary to-primary-hover hover:opacity-75 shadow-[0px_0px_0px_1px_theme(colors.primary.border),0px_0px_0px_2px_theme(colors.primary.DEFAULT),0px_1px_2px_0px_theme(colors.primary.hover)]',
      secondary:
        'border border-border text-foreground bg-elements hover:bg-secondary hover:opacity-90',
      ghost: 'text-foreground bg-transparent hover:bg-elements focus-visible:bg-elements',
      outline:
        'border border-border text-foreground bg-transparent hover:bg-elements hover:opacity-90',
      danger:
        'text-danger-foreground bg-gradient-to-b from-danger to-danger-hover hover:opacity-75 shadow-[0px_0px_0px_1px_theme(colors.danger.border),0px_0px_0px_2px_theme(colors.danger.DEFAULT),0px_1px_2px_0px_theme(colors.danger.hover)] ring-danger',
    },
    size: {
      default: 'h-9 px-4 text-sm',
      sm: 'h-8 px-4 text-xs',
      lg: 'h-10 px-8 text-base',
      icon: 'h-9 w-9',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})
