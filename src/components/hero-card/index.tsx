import Card from '@mui/material/Card'

import { Resource } from 'interfaces/game/resources'
import ResourceBar from 'components/resource-bar'
import { H2 } from 'components/typography'
import { HeroName } from 'interfaces/game/hero'

const HeroCard = ({ heroName }: { heroName: HeroName }) => {
  return (
    <Card className={`heroCard heroCard--${heroName}`} variant='outlined'>
      <H2>{heroName}</H2>
      <div className='heroCard__resources'>
        <ResourceBar resourceType={Resource.HEALTH} />
        <ResourceBar resourceType={Resource.MANA} />
      </div>
    </Card>
  )
}

export default HeroCard
