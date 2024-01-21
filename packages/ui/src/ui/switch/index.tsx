/* -------------------------------------------------------------------------- */
/* Imports                                                                    */
/* -------------------------------------------------------------------------- */

import * as React from 'react'
import { cn } from '../../utils/cn'
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
          ' block h-4 w-4 bg-primary-foreground rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[17px] data-[state=unchecked]:translate-x-[1px] duration-200  ease-out',
          {
            'rounded-md': shape === 'square',
          },
        )}
      />{' '}
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block absolute h-4 w-4 bg-primary-foreground rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[17px] delay-[30ms] data-[state=unchecked]:translate-x-[1px] duration-200 ease-out',
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
