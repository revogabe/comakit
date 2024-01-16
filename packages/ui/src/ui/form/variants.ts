import { cn } from '../../utils/cn'
import { tv } from 'tailwind-variants'

export const variants = tv({
  slots: {
    field: 'flex w-max flex-col gap-3',
    label: 'text-foreground text-sm font-medium data-[invalid]:text-danger',
    controlGroup: cn(
      'flex w-max rounded-lg overflow-hidden border border-border bg-elements outline-none transition-all duration-150 ease-out placeholder:text-placeholder file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 focus-visible:bg-transparent focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      '[&:has(input:focus)]:bg-transparent [&:has(input:focus)]:ring-2 [&:has(input:focus)]:ring-primary [&:has(input:focus)]:ring-offset-2 [&:has(input:focus)]:ring-offset-background',
    ),
    controlLeading: '[&>*]:ring-0 border-r border-border',
    hint: 'text-xs text-muted-foreground',
    error: 'text-xs text-danger',
  },
})
