import { createContext, useContext } from 'react'
import type { ComponentProps } from 'react'

export interface FieldControl {
  id: string
  describedBy: string | undefined
  invalid: boolean
  required: boolean | undefined
  disabled: boolean | undefined
}

type ControlProps = Pick<
  ComponentProps<'input'>,
  'id' | 'required' | 'disabled' | 'aria-invalid' | 'aria-describedby'
>

export const FieldContext = createContext<FieldControl | null>(null)

export function useFieldControl<T extends ControlProps>(props: T): T {
  const field = useContext(FieldContext)
  if (!field) {
    return props
  }
  const describedBy = [props['aria-describedby'], field.describedBy]
    .filter(Boolean)
    .join(' ')
  return {
    ...props,
    id: field.id,
    required: props.required ?? field.required,
    disabled: props.disabled ?? field.disabled,
    'aria-invalid': props['aria-invalid'] ?? (field.invalid || undefined),
    'aria-describedby': describedBy || undefined,
  }
}
