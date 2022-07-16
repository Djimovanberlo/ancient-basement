import React from 'react'

import { ActiveGameProps } from '@/interfaces/pages/active'
import { Character } from '@/interfaces/game/character'
import CharacterCard from 'Components/components/character-card'

const Combat = ({ updateGameState }: ActiveGameProps) => {
  return (
    <>
      <CharacterCard character={Character.IRENE} />
      <CharacterCard character={Character.CHAD} />
      <CharacterCard character={Character.OLIVE} />
      <CharacterCard character={Character.EUGENE} />
    </>
  )
}

export default Combat

// "paths": {
//   "@/components/*": ["src/components/*"],
//   "@/interfaces/*": ["src/interfaces/*"],
//   "@/layout/*": ["src/layout/*"],
//   "@/lib/*": ["src/lib/*"],
//   "@/pages/*": ["src/pages/*"],
//   "@/store/*": ["src/store/*"],
//   "@/styles/*": ["src/styles/*"]
// }
// },
// "include": ["src, **/*.ts", "**/*.tsx"],
// "exclude": ["node_modules"]
