import { cn } from '@/utils/cn'
import { tv } from 'tailwind-variants'

export const variants = tv({
  slots: {
    field: 'flex w-max flex-col gap-3',
    label: 'text-foreground data-[invalid]:text-danger text-sm font-medium',
    controlGroup: cn(
      'border-border bg-elements placeholder:text-placeholder focus-visible:ring-primary focus-visible:ring-offset-background flex w-max overflow-hidden rounded-lg border outline-none transition-all duration-150 ease-out file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:bg-transparent focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      '[&:has(input:focus)]:ring-primary [&:has(input:focus)]:ring-offset-background [&:has(input:focus)]:bg-transparent [&:has(input:focus)]:ring-2 [&:has(input:focus)]:ring-offset-2',
    ),
    controlLeading: 'border-border border-r [&>*]:ring-0',
    hint: 'text-muted-foreground text-xs',
    error: 'text-danger text-xs',
  },
})
