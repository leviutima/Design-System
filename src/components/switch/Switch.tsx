import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../../lib/cn/cn'
import { focusRing } from '../../lib/focus-ring/focus-ring'

export interface SwitchProps extends Omit<ComponentProps<'input'>, 'type' | 'role'> {
  label: ReactNode
}

export function Switch({ label, className, ...props }: SwitchProps) {
  return (
    <label
      className={cn(
        'inline-flex cursor-pointer items-start gap-2 text-sm has-disabled:cursor-not-allowed has-disabled:text-disabled',
        className,
      )}
    >
      <span className="relative inline-flex h-5 w-8 shrink-0">
        <input
          type="checkbox"
          role="switch"
          className={cn(
            'peer h-5 w-8 cursor-[inherit] appearance-none rounded-full bg-disabled transition-colors duration-100 checked:bg-foreground',
            'disabled:bg-border disabled:checked:bg-disabled',
            focusRing,
          )}
          {...props}
        />
        <span className="pointer-events-none absolute top-0.5 left-0.5 size-4 rounded-full bg-background transition-transform duration-100 peer-checked:translate-x-3 motion-reduce:transition-none" />
      </span>
      {label}
    </label>
  )
}
