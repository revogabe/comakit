import { tv } from 'tailwind-variants'
import { cn } from '../../utils/cn'

export const textfield = tv({
  slots: {
    base: cn(
      'text-foreground border-border bg-elements placeholder:text-placeholder focus-visible:ring-primary focus-visible:ring-offset-background flex w-[300px] rounded-lg border outline-none transition-all duration-150 ease-out file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:bg-transparent focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
    ),

    unstyled:
      'placeholder:text-placeholder text-foreground flex w-[300px] items-center justify-start bg-transparent px-3 text-sm outline-none',
  },
  variants: {
    size: {
      default: 'h-9 px-4 text-sm',
      sm: 'h-8 px-3 text-xs',
      lg: 'h-10 px-4 text-sm',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})
