import { useRecoilValue } from 'recoil'

import { HeroName } from 'interfaces/game/hero'
import { Resource } from 'interfaces/game/resources'
import { selectHeroStats } from 'store/heroes/getters'
import { H2 } from 'components/typography'
import ResourceBar from 'components/resource-bar'
import ActionButtons from 'components/action-buttons'

const HeroCard = ({ heroName }: { heroName: HeroName }) => {
  const { maxHealth, maxMana, health, mana } = useRecoilValue(selectHeroStats(heroName))

  return (
    <div className={`heroCard heroCard--${heroName}`}>
      <ActionButtons />
      <H2>{heroName}</H2>
      <div className='heroCard__resources'>
        <ResourceBar resourceType={Resource.HEALTH} maxValue={maxHealth} currentValue={health} />
        <ResourceBar resourceType={Resource.MANA} maxValue={maxMana} currentValue={mana} />
      </div>
    </div>
  )
}

export default HeroCard
