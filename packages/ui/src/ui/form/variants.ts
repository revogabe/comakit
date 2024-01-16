import { cn } from '../../utils/cn'
import { tv } from 'tailwind-variants'

export const variants = tv({
  slots: {
    field: 'flex w-max flex-col gap-3',
    label: 'text-foreground text-sm font-medium data-[invalid]:text-danger',
    controlGroup: cn(
      'flex w-max divide-x-[1px] overflow-hidden rounded-lg border border-border bg-elements text-[13px] outline-none transition-all duration-100 placeholder:text-placeholder data-[invalid]:ring-2 data-[invalid]:ring-danger-border',
      '[&:has(input:focus)]:bg-transparent [&:has(input:focus)]:ring-2 [&:has(input:focus)]:ring-primary [&:has(input:focus)]:ring-offset-2 [&:has(input:focus)]:ring-offset-background',
    ),
    controlLeading: '[&>*]:ring-0',
    hint: 'text-xs text-muted-foreground',
    error: 'text-xs text-danger',
  },
})
