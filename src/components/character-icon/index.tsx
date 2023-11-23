import { HeroName } from 'interfaces/game/hero'
import { EnemyName } from 'interfaces/game/enemy'
import CharacterIconLarge from 'components/character-icon/large'
import CharacterIconSmall from 'components/character-icon/small'

interface Props {
  character: HeroName | EnemyName | null
  isLarge?: boolean
}

const CharacterIcon = ({ character, isLarge = false }: Props) => {
  if (isLarge) return <CharacterIconLarge character={character} />
  return <CharacterIconSmall character={character} />
}

export default CharacterIcon
