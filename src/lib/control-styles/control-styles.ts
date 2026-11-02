import { focusRing } from '../focus-ring/focus-ring'

export const controlStyles = [
  'block h-10 w-full border border-foreground bg-background px-3 text-base text-foreground placeholder:text-muted-foreground',
  'disabled:cursor-not-allowed disabled:border-disabled disabled:text-disabled',
  'aria-invalid:border-2 aria-invalid:px-[calc(0.75rem-1px)]',
  focusRing,
]
