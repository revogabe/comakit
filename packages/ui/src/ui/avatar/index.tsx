/* -----------------------------------------------------------------------------
 * Imports
 * ----------------------------------------------------------------------------*/

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '../../utils/cn'
import { avatar, avatarGroup } from './variants'
import type { VariantProps } from 'tailwind-variants'
import { createContext } from '../../utils/create-context'
import { Slot } from '@radix-ui/react-slot'

/* -----------------------------------------------------------------------------
 * Avatar - Group
 * ----------------------------------------------------------------------------*/

const AVATAR_GROUP = 'AvatarGroup'

type AvatarGroupElement = React.ElementRef<'div'>
type AvatarGroupPrimitiveProps = React.ComponentPropsWithoutRef<'div'>
type AvatarGroupVariants = VariantProps<typeof avatarGroup>
type AvatarGroupContextValue = {
  isWithinGroup: boolean
  shape?: AvatarVariants['shape']
}
interface AvatarGroupProps extends AvatarGroupPrimitiveProps, AvatarGroupVariants {
  asChild?: boolean
  size?: AvatarVariants['size']
  shape?: AvatarVariants['shape']
}

const [AvatarGroupProvider, useAvatarGroupContext] = createContext<AvatarGroupContextValue>(
  AVATAR_GROUP,
  {
    isWithinGroup: false,
  },
)

const AvatarGroup = React.forwardRef<AvatarGroupElement, AvatarGroupProps>((props, ref) => {
  const { asChild = false, max, size, shape, children, className, ...groupProps } = props
  const Component = asChild ? Slot : 'div'
  const count = React.Children.count(children)
  const { base } = avatarGroup({ max })
  const { base: baseRoot } = avatar({ size, group: true, shape })

  return (
    <AvatarGroupProvider isWithinGroup>
      <Component ref={ref} className={cn(base({ className }))} {...groupProps}>
        {children}
        <div className={cn(baseRoot(), 'items-center justify-center')}>
          <span className="mr-0.5 font-semibold text-foreground text-xs">
            +{count - Number(max)}
          </span>
        </div>
      </Component>
    </AvatarGroupProvider>
  )
})

AvatarGroup.displayName = AVATAR_GROUP

/* -----------------------------------------------------------------------------
 * Avatar - Root
 * ----------------------------------------------------------------------------*/

const AVATAR_NAME = 'AvatarRoot'

type AvatarElement = React.ElementRef<typeof AvatarPrimitive.Root>
type AvatarPrimitiveProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
type AvatarVariants = VariantProps<typeof avatar>

export interface AvatarProps extends AvatarVariants, AvatarPrimitiveProps {}

const AvatarRoot = React.forwardRef<AvatarElement, AvatarProps>((props, ref) => {
  const { className, size, shape: shapeProp, ...rootProps } = props
  const { isWithinGroup, shape } = useAvatarGroupContext(AVATAR_NAME)
  const { base } = avatar({ size, group: isWithinGroup, shape: shapeProp || shape })

  return <AvatarPrimitive.Root ref={ref} className={cn(base({ className }))} {...rootProps} />
})

AvatarRoot.displayName = AVATAR_NAME

/* -----------------------------------------------------------------------------
 * Avatar - Image
 * ----------------------------------------------------------------------------*/

const AVATAR_IMAGE = 'AvatarImage'

type AvatarImageElement = React.ElementRef<typeof AvatarPrimitive.Image>
type AvatarImagePrimitiveProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>

const AvatarImage = React.forwardRef<AvatarImageElement, AvatarImagePrimitiveProps>(
  (props, ref) => {
    const { className, ...imageProps } = props

    return (
      <AvatarPrimitive.Image
        ref={ref}
        className={cn('aspect-square h-full w-full', className)}
        {...imageProps}
      />
    )
  },
)

AvatarImage.displayName = AVATAR_IMAGE

/* -----------------------------------------------------------------------------
 * Avatar - Fallback
 * ----------------------------------------------------------------------------*/

const AVATAR_FALLBACK = 'AvatarFallback'

type AvatarFallbackElement = React.ElementRef<typeof AvatarPrimitive.Fallback>
type AvatarFallbackPrimitiveProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>

const AvatarFallback = React.forwardRef<AvatarFallbackElement, AvatarFallbackPrimitiveProps>(
  (props, ref) => {
    const { className, ...fallbackProps } = props

    return (
      <AvatarPrimitive.Fallback
        ref={ref}
        className={cn('flex h-full w-full items-center justify-center bg-muted', className)}
        {...fallbackProps}
      />
    )
  },
)

AvatarFallback.displayName = AVATAR_FALLBACK

/* -----------------------------------------------------------------------------
 * Exports
 * ----------------------------------------------------------------------------*/

export const Avatar = Object.assign(
  {},
  {
    Root: AvatarRoot,
    Group: AvatarGroup,
    Image: AvatarImage,
    Fallback: AvatarFallback,
  },
)
