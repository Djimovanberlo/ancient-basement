import { useRecoilValue } from 'recoil'

import { charactersState } from 'store/characters/atoms'
import HeroCard from 'components/hero-card'
import { HeroName } from 'interfaces/game/hero'
import { useId } from 'react'

const HeroCardsWrapper = () => {
  const id = useId()
  const { heroes } = useRecoilValue(charactersState)

  return (
    <div className='heroCardsWrapper'>
      {heroes.map(hero => (
        <HeroCard key={hero.name + id} hero={hero} />
      ))}
    </div>
  )
}

export default HeroCardsWrapper
