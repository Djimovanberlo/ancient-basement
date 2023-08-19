import { useRecoilValue } from 'recoil'

import { Hero, HeroName } from 'interfaces/game/hero'
import { Resource } from 'interfaces/game/resources'
// import { selectHeroStats } from 'store/heroes/selectors'
import { H2 } from 'components/typography'
import ResourceBar from 'components/resource-bar'
import ActionButtons from 'components/action-buttons'

interface Props {
  hero: Hero
}

const HeroCard = ({ hero }: Props) => {
  const { maxHealth, maxMana, health, mana } = hero.status.stats

  return (
    <div className='heroCard'>
      <ActionButtons />
      <H2>{hero.name}</H2>
      <div className='heroCard__resources'>
        <ResourceBar resourceType={Resource.HEALTH} maxValue={maxHealth} currentValue={health} />
        <ResourceBar resourceType={Resource.MANA} maxValue={maxMana} currentValue={mana} />
      </div>
    </div>
  )
}

export default HeroCard
