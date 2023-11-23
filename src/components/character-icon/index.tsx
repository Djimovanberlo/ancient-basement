import { HeroName } from 'interfaces/game/hero'
import { EnemyName } from 'interfaces/game/enemy'
import CharacterIconLarge from 'components/character-icon/large'
import CharacterIconSmall from 'components/character-icon/small'

const CharacterIcon = ({ character }: { character: HeroName | EnemyName }) => {
  const isLarge = Math.random() < 0.5

  if (isLarge) return <CharacterIconLarge character={character} />
  return <CharacterIconSmall character={character} />
}

export default CharacterIcon
