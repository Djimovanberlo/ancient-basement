import { useRecoilValue } from 'recoil'

import { charactersState } from 'store/characters/atoms'
import HeroCard from 'components/hero-card'
import { HeroName } from 'interfaces/game/hero'

const HeroCardsWrapper = () => {
  const { heroes } = useRecoilValue(charactersState)

  return (
    <div className='heroCardsWrapper'>
      <HeroCard hero={heroes[HeroName.IRENE]} />
      <HeroCard hero={heroes[HeroName.CHAD]} />
      <HeroCard hero={heroes[HeroName.OLIVE]} />
      <HeroCard hero={heroes[HeroName.EUGENE]} />
    </div>
  )
}

export default HeroCardsWrapper
