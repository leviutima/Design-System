import type { ComponentProps } from 'react'

function Icon({ children, ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function CheckIcon(props: ComponentProps<'svg'>) {
  return (
    <Icon {...props}>
      <path d="M4 8.5 6.8 11 12 5" />
    </Icon>
  )
}

export function ChevronDownIcon(props: ComponentProps<'svg'>) {
  return (
    <Icon {...props}>
      <path d="M4.5 6.5 8 10l3.5-3.5" />
    </Icon>
  )
}

export function ErrorIcon(props: ComponentProps<'svg'>) {
  return (
    <Icon {...props}>
      <circle cx="8" cy="8" r="6.25" />
      <path d="M8 4.75v3.75M8 11.25v.01" />
    </Icon>
  )
}
