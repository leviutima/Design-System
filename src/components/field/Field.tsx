import { useId } from 'react'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../../lib/cn/cn'
import { ErrorIcon } from '../../lib/icons/icons'
import { FieldContext } from './use-field-control'

export interface FieldProps extends ComponentProps<'div'> {
  label: ReactNode
  hint?: ReactNode
  error?: ReactNode
  required?: boolean
  disabled?: boolean
}

export function Field({
  label,
  hint,
  error,
  required,
  disabled,
  id,
  className,
  children,
  ...props
}: FieldProps) {
  const generatedId = useId()
  const controlId = id ?? generatedId
  const hintId = hint ? `${controlId}-hint` : undefined
  const errorId = error ? `${controlId}-error` : undefined

  return (
    <div className={cn('flex flex-col gap-1.5', className)} {...props}>
      <label
        htmlFor={controlId}
        className={cn('text-sm font-medium', disabled && 'text-disabled')}
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <FieldContext
        value={{
          id: controlId,
          describedBy: [hintId, errorId].filter(Boolean).join(' ') || undefined,
          invalid: Boolean(error),
          required,
          disabled,
        }}
      >
        {children}
      </FieldContext>
      {hint && (
        <p id={hintId} className="text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="flex items-start gap-1.5 text-sm font-medium">
          <ErrorIcon className="mt-0.5 size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}
