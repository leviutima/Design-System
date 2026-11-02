import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn/cn'

const badgeVariants = cva(
  'inline-flex items-center rounded-sm border px-1.5 py-px text-xs',
  {
    variants: {
      variant: {
        solid: 'border-transparent bg-subtle-hover text-foreground',
        outline: 'border-border bg-transparent text-muted-foreground',
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
