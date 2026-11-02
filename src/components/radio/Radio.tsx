import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../../lib/cn/cn'
import { focusRing } from '../../lib/focus-ring/focus-ring'

export interface RadioProps extends Omit<ComponentProps<'input'>, 'type'> {
  label: ReactNode
}

export function Radio({ label, className, ...props }: RadioProps) {
  return (
    <label
      className={cn(
        'inline-flex cursor-pointer items-start gap-2 text-sm has-disabled:cursor-not-allowed has-disabled:text-disabled',
        className,
      )}
    >
      <span className="relative mt-0.5 inline-flex size-4 shrink-0">
        <input
          type="radio"
          className={cn(
            'peer size-4 cursor-[inherit] appearance-none rounded-full border border-muted-foreground bg-background transition-colors duration-100 checked:border-foreground',
            'disabled:border-border disabled:bg-subtle',
            focusRing,
          )}
          {...props}
        />
        <span className="pointer-events-none absolute inset-1 hidden rounded-full bg-foreground peer-checked:block peer-disabled:bg-disabled" />
      </span>
      {label}
    </label>
  )
}
