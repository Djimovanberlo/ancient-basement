import Button from '@mui/material/Button'

import { ButtonProps } from '../../interfaces/components/button'

const ButtonComponent = ({ children, className = '', onClick }: ButtonProps) => {
  return (
    <Button className={`button ${className}`} onClick={onClick} variant='contained'>
      {children}
    </Button>
  )
}

export default ButtonComponent
