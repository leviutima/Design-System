import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn/cn'
import { focusRing } from '../../lib/focus-ring/focus-ring'

export const buttonVariants = cva(
  [
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border text-sm font-medium whitespace-nowrap transition-colors duration-100 select-none',
    'disabled:cursor-not-allowed disabled:border-border disabled:bg-subtle disabled:text-disabled',
    focusRing,
  ],
  {
    variants: {
      variant: {
        primary:
          'border-transparent bg-foreground text-background hover:bg-foreground/85 active:bg-foreground/75',
        secondary:
          'border-border bg-background text-foreground hover:bg-subtle active:bg-subtle-hover',
        ghost:
          'border-transparent bg-transparent text-foreground hover:bg-subtle active:bg-subtle-hover disabled:border-transparent disabled:bg-transparent',
      },
      size: {
        sm: 'h-7 px-2.5',
        md: 'h-9 px-3',
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
          className="size-3 animate-spin rounded-full border-[1.5px] border-current border-t-transparent motion-reduce:animate-none"
        />
      )}
      {children}
    </button>
  )
}
