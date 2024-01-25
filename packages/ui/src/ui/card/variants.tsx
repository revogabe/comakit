import { tv } from 'tailwind-variants'
import { cn } from '../../utils/cn'

export const card = tv({
  slots: {
    base: cn(
      'bg-secondary border gap-6 text-sm border-border rounded-lg grid w-full max-w-md duration-200 sm:rounded-lg',
      'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
    ),
  },
  variants: {
    size: {
      default: 'p-8',
      sm: 'p-6',
      lg: 'p-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})
