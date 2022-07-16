import Button from '@mui/material/Button'

const ButtonComponent = ({ children, className, onClick }: any) => {
  return (
    <Button className={`button ${className}`} onClick={onClick} variant='contained'>
      {children}
    </Button>
  )
}

export default ButtonComponent
