import { EnemyName } from 'interfaces/game/enemy'
import { HeroName } from 'interfaces/game/hero'

const CharacterIconLarge = ({ character }: { character: HeroName | EnemyName }) => {
  return <div className='characterIcon--large'>{character}</div>
}

export default CharacterIconLarge
