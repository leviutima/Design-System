import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn/cn'

const badgeVariants = cva(
  'inline-flex items-center border border-foreground px-1.5 py-0.5 font-mono text-xs',
  {
    variants: {
      variant: {
        solid: 'bg-foreground text-background',
        outline: 'bg-transparent text-foreground',
      },
    },
    defaultVariants: { variant: 'solid' },
  },
)

export interface BadgeProps
  extends ComponentProps<'span'>, VariantProps<typeof badgeVariants> {}

export function Badge({ variant, className, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
