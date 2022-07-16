import Card from '@mui/material/Card'

import { Resource } from 'interfaces/game/resources'
import ResourceBar from 'components/resource-bar'
import { H2 } from 'components/typography'
import { Character } from 'interfaces/game/character'

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <Card className={`characterCard characterCard--${character}`} variant='outlined'>
      <H2>{character}</H2>
      <ResourceBar resourceType={Resource.HEALTH} />
      <ResourceBar resourceType={Resource.MANA} />
    </Card>
  )
}

export default CharacterCard
