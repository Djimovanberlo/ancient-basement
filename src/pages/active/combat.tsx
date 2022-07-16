import { ActiveGameProps } from 'interfaces/pages/active'
import { Character } from 'interfaces/game/character'
import CharacterCard from 'components/character-card'

const Combat = ({ updateGameState }: ActiveGameProps) => {
  return (
    <div className='combat'>
      <CharacterCard character={Character.IRENE} />
      <CharacterCard character={Character.CHAD} />
      <CharacterCard character={Character.OLIVE} />
      <CharacterCard character={Character.EUGENE} />
    </div>
  )
}

export default Combat
