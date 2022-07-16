import Card from '@mui/material/Card'

const CharacterCard = ({ character }: any) => {
  return (
    <Card className={`characterCard characterCard--${character}`} variant='outlined'>
      <div>card</div>
    </Card>
  )
}

export default CharacterCard
