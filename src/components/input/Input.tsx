import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn/cn'
import { controlStyles } from '../../lib/control-styles/control-styles'
import { useFieldControl } from '../field/use-field-control'

export type InputProps = ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
  return <input className={cn(controlStyles, className)} {...useFieldControl(props)} />
}
