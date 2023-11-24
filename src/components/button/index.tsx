import Button from '@mui/material/Button'
import { ReactNode, MouseEvent } from 'react'

interface Props {
  children: ReactNode
  className?: string
  onClick: (e: MouseEvent<HTMLElement>) => void
}

const ButtonComponent = ({ children, className = '', onClick }: Props) => {
  return (
    <Button className={`button ${className}`} onClick={onClick} variant='contained'>
      {children}
    </Button>
  )
}

export default ButtonComponent
