import { tv } from 'tailwind-variants'
import { cn } from '@/utils/cn'

export const switchRoot = tv({
  slots: {
    base: cn(
      'border-border focus-visible:ring-primary focus-visible:ring-offset-background peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-primary data-[state=checked]:border-primary-border data-[state=unchecked]:bg-elements',
      'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
    ),
  },
  variants: {
    shape: {
      square: 'rounded-lg',
      circle: 'rounded-full',
    },
  },
  defaultVariants: {
    size: 'default',
    shape: 'circle',
  },
})
