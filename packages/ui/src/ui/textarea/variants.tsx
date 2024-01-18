import { tv } from 'tailwind-variants'
import { cn } from '../../utils/cn'

export const textarea = tv({
  slots: {
    base: cn(
      'flex w-[300px] overflow-hidden px-3 py-2 text-sm rounded-lg border border-border bg-elements outline-none transition-all duration-150 ease-out placeholder:text-placeholder file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 focus-visible:bg-transparent focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'shadow-[0px_0px_0px_1px_theme(colors.background),0px_1px_2px_0px_theme(colors.background)]',
    ),

    unstyled:
      'w-[300px] text-sm flex justify-start items-center placeholder:text-placeholder text-foreground px-3 bg-transparent outline-none',
  },
})
