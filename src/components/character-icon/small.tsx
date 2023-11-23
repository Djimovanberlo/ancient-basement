import { EnemyName } from 'interfaces/game/enemy'
import { HeroName } from 'interfaces/game/hero'

const CharacterIconSmall = ({ character }: { character: HeroName | EnemyName | null }) => {
  return <div className='characterIcon--small'>{character}</div>
}

export default CharacterIconSmall
