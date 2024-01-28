import React from 'react'
import { Card } from '@/comakit'
import { cn } from '@/utils/cn'

type CardProps = React.ComponentProps<typeof Card.Root>
type FeatureProps = CardProps & {
  title: string
  description: string
  disabled?: boolean
  date?: string
}

export const Feature = ({
  title,
  description,
  className,
  children,
  disabled,
  date,
}: FeatureProps) => {
  return (
    <Card.Root
      className={cn(
        'group relative flex h-[320px] select-none flex-col items-start justify-end overflow-hidden duration-300 ease-out hover:scale-[1.02] hover:brightness-110',
        {
          'bg-secondary/30 border-border/30': disabled,
        },
        className,
      )}
    >
      {date && disabled && (
        <div className="absolute left-0 top-0 z-40 flex h-full w-full items-center justify-center">
          <span className="border-border bg-elements group-hover:text-foreground group-hover:border-muted-foreground/25 text-muted-foreground translate-y-[-16px] rounded-full border px-4 py-1.5 font-medium duration-300 ease-out">
            {date}
          </span>
        </div>
      )}
      <div
        className={cn('', {
          'opacity-30': disabled,
        })}
      >
        {children}
      </div>
      <div
        className={cn('z-20 flex flex-col gap-1.5', {
          'opacity-30': disabled,
        })}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div
        className={cn(
          'from-secondary via-secondary/80 absolute inset-x-0 bottom-0 z-10 h-72 w-full bg-gradient-to-t to-transparent',
        )}
      />
    </Card.Root>
  )
}
