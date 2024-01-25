import { tv } from 'tailwind-variants'
import { cn } from '@/utils/cn'

export const avatarGroup = tv({
  slots: {
    base: cn('flex w-max space-x-[-12px]'),
  },
  variants: {
    max: {
      1: '[&>span:nth-child(n+2)]:hidden',
      2: '[&>span:nth-child(n+3)]:hidden',
      3: '[&>span:nth-child(n+4)]:hidden',
      4: '[&>span:nth-child(n+5)]:hidden',
      5: '[&>span:nth-child(n+6)]:hidden',
      6: '[&>span:nth-child(n+7)]:hidden',
      7: '[&>span:nth-child(n+8)]:hidden',
      8: '[&>span:nth-child(n+9)]:hidden',
      9: '[&>span:nth-child(n+10)]:hidden',
      10: '[&>span:nth-child(n+11)]:hidden',
    },
  },
  defaultVariants: {
    max: 4,
  },
})

export const avatar = tv({
  slots: {
    base: cn(
      'bg-secondary border-border relative flex shrink-0 overflow-hidden rounded-lg border',
      'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
    ),
  },
  variants: {
    group: {
      true: 'ring-background ring-offset-background rounded-full ring-2 ring-offset-2',
    },
    shape: {
      square: 'rounded-lg',
      circle: 'rounded-full',
    },
    size: {
      default: 'h-9 w-9 text-xs',
      sm: 'h-8 w-8 text-xs',
      lg: 'h-10 w-10 text-sm',
      xl: 'h-14 w-14 text-base',
    },
  },
  defaultVariants: {
    size: 'default',
    shape: 'circle',
  },
})
