import { cva } from 'class-variance-authority'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../../lib/cn/cn'
import { ErrorIcon } from '../../lib/icons/icons'

const alertVariants = cva(
  'flex items-start gap-2.5 rounded-md border bg-subtle px-3 py-2.5 text-sm text-foreground',
  {
    variants: {
      tone: {
        info: 'border-transparent',
        error: 'border-muted-foreground',
      },
    },
  },
)

export interface AlertProps extends Omit<ComponentProps<'div'>, 'title'> {
  tone?: 'info' | 'error'
  title?: ReactNode
}

export function Alert({ tone = 'info', title, className, children, ...props }: AlertProps) {
  return (
    <div
      role={tone === 'error' ? 'alert' : 'status'}
      className={cn(alertVariants({ tone }), className)}
      {...props}
    >
      {tone === 'error' && <ErrorIcon className="mt-0.5 size-4 shrink-0" />}
      <div className="flex flex-col gap-0.5">
        {title && <p className="font-medium">{title}</p>}
        {children && <div className={title ? 'text-muted-foreground' : undefined}>{children}</div>}
      </div>
    </div>
  )
}
