import { useId } from 'react'
import { useRecoilValue } from 'recoil'

import { charactersState } from 'store/characters/atoms'
import HeroCard from 'components/hero-card'

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
