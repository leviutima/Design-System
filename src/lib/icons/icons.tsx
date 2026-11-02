import type { ComponentProps } from 'react'

function Icon({ children, ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
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
      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
    </Icon>
  )
}

export function ChevronDownIcon(props: ComponentProps<'svg'>) {
  return (
    <Icon {...props}>
      <path d="M3.5 6 8 10.5 12.5 6" />
    </Icon>
  )
}

export function ErrorIcon(props: ComponentProps<'svg'>) {
  return (
    <Icon {...props}>
      <path d="M1 1h14v14H1z" />
      <path d="M8 4.5v4M8 11.5v.01" />
    </Icon>
  )
}
