import { useId } from 'react'
import { useRecoilValue } from 'recoil'

import roundState from 'store/round/atoms'
import CharacterIcon from 'components/character-icon'

const Timeline = () => {
  const id = useId()
  const round = useRecoilValue(roundState)

  return (
    <div className='timeline'>
      {round.turnOrder.map(({ name }, i) => (
        <CharacterIcon key={id + i} isLarge={i === 0} character={name} />
      ))}
    </div>
  )
}

export default Timeline
