export interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}
