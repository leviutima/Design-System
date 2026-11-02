import { focusRing } from '../focus-ring/focus-ring'

export const controlStyles = [
  'block h-9 w-full rounded-sm border border-border bg-background px-2.5 text-sm text-foreground transition-colors duration-100 placeholder:text-muted-foreground hover:border-disabled',
  'disabled:cursor-not-allowed disabled:border-border disabled:bg-subtle disabled:text-disabled',
  'aria-invalid:border-foreground',
  focusRing,
]
