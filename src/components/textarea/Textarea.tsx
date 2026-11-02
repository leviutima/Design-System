import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn/cn'
import { controlStyles } from '../../lib/control-styles/control-styles'
import { useFieldControl } from '../field/use-field-control'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(controlStyles, 'h-auto min-h-20 resize-y py-2', className)}
      {...useFieldControl(props)}
    />
  )
}
