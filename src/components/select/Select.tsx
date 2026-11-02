import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn/cn'
import { controlStyles } from '../../lib/control-styles/control-styles'
import { ChevronDownIcon } from '../../lib/icons/icons'
import { useFieldControl } from '../field/use-field-control'

export type SelectProps = ComponentProps<'select'>

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <div className="relative has-disabled:text-disabled">
      <select
        className={cn(controlStyles, 'cursor-pointer appearance-none pr-9 aria-invalid:pr-9', className)}
        {...useFieldControl(props)}
      >
        {children}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute top-3 right-3 size-4" />
    </div>
  )
}
