import { cva } from 'class-variance-authority'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../../lib/cn/cn'
import { ErrorIcon } from '../../lib/icons/icons'

const alertVariants = cva('flex items-start gap-3 border border-foreground p-4', {
  variants: {
    tone: {
      info: 'bg-background text-foreground',
      error: 'bg-foreground text-background',
    },
  },
})

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
      {tone === 'error' && <ErrorIcon className="mt-0.5 size-5 shrink-0" />}
      <div className="flex flex-col gap-1">
        {title && <p className="font-semibold">{title}</p>}
        {children && <div className="text-sm">{children}</div>}
      </div>
    </div>
  )
}
