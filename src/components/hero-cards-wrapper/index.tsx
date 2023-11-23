import { useId } from 'react'
import { useRecoilValue } from 'recoil'

import battleState from 'store/battle/atoms'
import HeroCard from 'components/hero-card'

const HeroCardsWrapper = () => {
  const id = useId()
  const { heroes } = useRecoilValue(battleState)

  return (
    <div className='heroCardsWrapper'>
      {heroes.map(hero => (
        <HeroCard key={hero.name + id} hero={hero} />
      ))}
    </div>
  )
}

export default HeroCardsWrapper
