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
        'inline-flex cursor-pointer items-start gap-2 has-disabled:cursor-not-allowed has-disabled:text-disabled',
        className,
      )}
    >
      <span className="relative mt-0.5 inline-flex h-5 w-9 shrink-0">
        <input
          type="checkbox"
          role="switch"
          className={cn(
            'peer h-5 w-9 cursor-[inherit] appearance-none border border-foreground bg-background checked:bg-foreground',
            'disabled:border-disabled disabled:checked:bg-disabled',
            focusRing,
          )}
          {...props}
        />
        <span className="pointer-events-none absolute top-1 left-1 size-3 bg-foreground peer-checked:translate-x-4 peer-checked:bg-background peer-disabled:bg-disabled peer-disabled:peer-checked:bg-background" />
      </span>
      {label}
    </label>
  )
}
