import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn/cn'
import { focusRing } from '../../lib/focus-ring/focus-ring'

export const buttonVariants = cva(
  [
    'inline-flex cursor-pointer items-center justify-center gap-2 border font-medium whitespace-nowrap select-none',
    'disabled:cursor-not-allowed disabled:border-disabled disabled:bg-transparent disabled:text-disabled',
    focusRing,
  ],
  {
    variants: {
      variant: {
        primary:
          'border-foreground bg-foreground text-background hover:bg-background hover:text-foreground active:bg-foreground active:text-background',
        secondary:
          'border-foreground bg-background text-foreground hover:bg-foreground hover:text-background active:bg-background active:text-foreground',
        ghost:
          'border-transparent bg-transparent text-foreground hover:bg-foreground hover:text-background active:bg-transparent active:text-foreground',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export interface ButtonProps
  extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  loading?: boolean
}

export function Button({
  variant,
  size,
  loading = false,
  disabled,
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="size-3 animate-spin border-2 border-current border-t-transparent motion-reduce:animate-none"
        />
      )}
      {children}
    </button>
  )
}
