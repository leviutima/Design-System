import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn/cn'

export function Table({ className, ...props }: ComponentProps<'table'>) {
  return (
    <div className="w-full overflow-x-auto border border-foreground">
      <table className={cn('w-full bg-background text-sm', className)} {...props} />
    </div>
  )
}

export function TableHeader({ className, ...props }: ComponentProps<'thead'>) {
  return <thead className={cn('border-b border-foreground', className)} {...props} />
}

export function TableBody(props: ComponentProps<'tbody'>) {
  return <tbody {...props} />
}

export function TableRow({ className, ...props }: ComponentProps<'tr'>) {
  return (
    <tr className={cn('border-b border-foreground last:border-b-0', className)} {...props} />
  )
}

export function TableHead({ className, scope = 'col', ...props }: ComponentProps<'th'>) {
  return (
    <th
      scope={scope}
      className={cn('px-4 py-2 text-left font-medium text-muted-foreground', className)}
      {...props}
    />
  )
}

export function TableCell({ className, ...props }: ComponentProps<'td'>) {
  return <td className={cn('px-4 py-2', className)} {...props} />
}
