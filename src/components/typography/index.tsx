import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export const H1 = ({ children, className }: Props) => {
  return (
    <h1 id='H1' className={className}>
      {children}
    </h1>
  )
}

export const H2 = ({ children, className }: Props) => {
  return (
    <p id='H2' className={className}>
      {children}
    </p>
  )
}

export const P1 = ({ children, className }: Props) => {
  return (
    <p id='P1' className={className}>
      {children}
    </p>
  )
}

export const P2 = ({ children, className }: Props) => {
  return (
    <p id='P2' className={className}>
      {children}
    </p>
  )
}
