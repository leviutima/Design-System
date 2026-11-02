import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../../lib/cn/cn'
import { focusRing } from '../../lib/focus-ring/focus-ring'
import { CheckIcon } from '../../lib/icons/icons'

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type'> {
  label: ReactNode
}

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label
      className={cn(
        'inline-flex cursor-pointer items-start gap-2 text-sm has-disabled:cursor-not-allowed has-disabled:text-disabled',
        className,
      )}
    >
      <span className="relative mt-0.5 inline-flex size-4 shrink-0">
        <input
          type="checkbox"
          className={cn(
            'peer size-4 cursor-[inherit] appearance-none rounded-[3px] border border-muted-foreground bg-background transition-colors duration-100 checked:border-foreground checked:bg-foreground',
            'disabled:border-border disabled:bg-subtle disabled:checked:border-disabled disabled:checked:bg-disabled',
            focusRing,
          )}
          {...props}
        />
        <CheckIcon className="pointer-events-none absolute inset-0 hidden size-4 text-background peer-checked:block" />
      </span>
      {label}
    </label>
  )
}
