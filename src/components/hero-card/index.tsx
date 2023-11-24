import { useRecoilValue } from 'recoil'

import { Resource } from 'interfaces/game/resources'
import { Character } from 'interfaces/game/character'
import selectActiveTurn from 'store/round/selectors'
import ResourceBar from 'components/resource-bar'
import ActionButtons from 'components/action-buttons'
import { H2 } from 'components/typography'

interface Props {
  hero: Character
}

const HeroCard = ({ hero }: Props) => {
  const activeTurn = useRecoilValue(selectActiveTurn)
  const { maxHealth, maxMana, health, mana } = hero.status.stats
  const isActiveTurn = activeTurn?.id === hero.id

  return (
    <div className='heroCard'>
      {isActiveTurn && <ActionButtons />}
      <H2>{hero.name}</H2>
      <div className='heroCard__resources'>
        <ResourceBar resourceType={Resource.HEALTH} maxValue={maxHealth} currentValue={health} />
        <ResourceBar resourceType={Resource.MANA} maxValue={maxMana} currentValue={mana} />
      </div>
    </div>
  )
}

export default HeroCard
