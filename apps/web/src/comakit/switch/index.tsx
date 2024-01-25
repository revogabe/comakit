/* -------------------------------------------------------------------------- */
/* Imports                                                                    */
/* -------------------------------------------------------------------------- */

import * as React from 'react'
import { cn } from '@/utils/cn'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import type { VariantProps } from 'tailwind-variants'
import { switchRoot } from './variants'

/* -------------------------------------------------------------------------- */
/* Type                                                                       */
/* -------------------------------------------------------------------------- */

type SwitchElement = React.ElementRef<typeof SwitchPrimitives.Root>
type SwitchPrimitiveProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
type SwitchVariants = VariantProps<typeof switchRoot>

interface SwitchProps extends SwitchPrimitiveProps, SwitchVariants {}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const SWITCH_NAME = 'SwitchRoot'

const Switch = React.forwardRef<SwitchElement, SwitchProps>((props, ref) => {
  const { className, shape, ...rootProps } = props
  const { base } = switchRoot({ shape })

  return (
    <SwitchPrimitives.Root ref={ref} className={cn(base({ className }), 'relative')} {...rootProps}>
      <SwitchPrimitives.Thumb
        className={cn(
          ' bg-primary-foreground block h-4 w-4 rounded-full ring-0 transition-transform duration-200 ease-out data-[state=checked]:translate-x-[17px]  data-[state=unchecked]:translate-x-[1px]',
          {
            'rounded-md': shape === 'square',
          },
        )}
      />{' '}
      <SwitchPrimitives.Thumb
        className={cn(
          'bg-primary-foreground pointer-events-none absolute block h-4 w-4 rounded-full ring-0 transition-transform delay-[30ms] duration-200 ease-out data-[state=checked]:translate-x-[17px] data-[state=unchecked]:translate-x-[1px]',
          {
            'rounded-md': shape === 'square',
          },
        )}
      />
    </SwitchPrimitives.Root>
  )
})

Switch.displayName = SWITCH_NAME

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export { Switch }
