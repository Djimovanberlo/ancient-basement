import HeroCard from 'components/hero-card'
import { HeroName } from 'interfaces/game/hero'

const HeroCardsWrapper = () => (
  <div className='heroCardsWrapper'>
    <HeroCard heroName={HeroName.IRENE} />
    <HeroCard heroName={HeroName.CHAD} />
    <HeroCard heroName={HeroName.OLIVE} />
    <HeroCard heroName={HeroName.EUGENE} />
  </div>
)

export default HeroCardsWrapper
