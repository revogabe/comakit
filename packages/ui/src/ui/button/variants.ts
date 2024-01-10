import { tv } from 'tailwind-variants';

export const button = tv({
  slots: {
    base: 'flex justify-center items-center gap-2 rounded-lg font-semibold outline-none transition-all ease-in-out duration-75 active:scale-[0.98] cursor-default disabled:pointer-events-none disabled:opacity-50',
    loader: '',
  },
  variants: {
    variant: {
      primary:
        'border border-primary-border text-primary-foreground bg-gradient-to-t from-primary to-primary-hover hover:opacity-75',
      secondary: 'border border-border text-foreground bg-elements hover:bg-secondary',
      ghost: 'text-foreground bg-transparent hover:bg-elements',
      link: 'text-primary cursor-pointer underline-offset-4 hover:underline',
      danger: 'border-danger-border border bg-danger hover:bg-danger-hover text-foreground',
    },
    size: {
      default: 'h-10 px-6 text-sm',
      sm: 'h-8 px-4 text-xs',
      lg: 'h-10 px-8 text-base',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
});
