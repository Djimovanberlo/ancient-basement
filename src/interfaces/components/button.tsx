import { ReactNode, MouseEvent } from 'react'

export interface ButtonProps {
  children: ReactNode
  className?: string
  onClick: (e: MouseEvent<HTMLElement>) => void
}
