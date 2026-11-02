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
        'inline-flex cursor-pointer items-start gap-2 has-disabled:cursor-not-allowed has-disabled:text-disabled',
        className,
      )}
    >
      <span className="relative mt-1 inline-flex size-4 shrink-0">
        <input
          type="checkbox"
          className={cn(
            'peer size-4 cursor-[inherit] appearance-none border border-foreground bg-background checked:bg-foreground',
            'disabled:border-disabled disabled:checked:bg-disabled',
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
