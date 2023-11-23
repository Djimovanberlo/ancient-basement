import { useRecoilValue } from 'recoil'

import { Resource } from 'interfaces/game/resources'
import { H2 } from 'components/typography'
import ResourceBar from 'components/resource-bar'
import ActionButtons from 'components/action-buttons'
import { Character } from 'interfaces/game/character'
import roundState from 'store/round/atoms'
import selectActiveTurn from 'store/round/selectors'

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
