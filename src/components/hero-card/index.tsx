import { useRecoilValue } from 'recoil'
import Card from '@mui/material/Card'

import { HeroName } from 'interfaces/game/hero'
import { Resource } from 'interfaces/game/resources'
import ResourceBar from 'components/resource-bar'
import { H2 } from 'components/typography'
import { selectHeroStats } from 'store/heroes/selectors'

const HeroCard = ({ heroName }: { heroName: HeroName }) => {
  const { maxHealth, maxMana, health, mana } = useRecoilValue(selectHeroStats(heroName))

  return (
    <Card className={`heroCard heroCard--${heroName}`} variant='outlined'>
      <H2>{heroName}</H2>
      <div className='heroCard__resources'>
        <ResourceBar resourceType={Resource.HEALTH} maxValue={maxHealth} currentValue={health} />
        <ResourceBar resourceType={Resource.MANA} maxValue={maxMana} currentValue={mana} />
      </div>
    </Card>
  )
}

export default HeroCard
