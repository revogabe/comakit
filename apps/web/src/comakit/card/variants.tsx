import { tv } from 'tailwind-variants'
import { cn } from '@/utils/cn'

export const card = tv({
  slots: {
    base: cn(
      'bg-secondary border-border grid w-full max-w-md gap-6 rounded-2xl border text-sm duration-200 sm:rounded-2xl',
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
