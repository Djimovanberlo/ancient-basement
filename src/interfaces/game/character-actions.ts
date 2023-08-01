export enum HeroActionNames {
  ATTACK = 'attack',
  DEFEND = 'defend',
  ABILITY = 'ability',
  ITEM = 'item',
  INVENTORY = 'inventory',
}

export enum EnemyActionNames {
  ATTACK = 'attack',
  DEFEND = 'defend',
  ABILITY = 'ability',
}

export interface CharacterActionActors {
  usedBy: HeroActionNames | EnemyActionNames
  mainTarget: HeroActionNames | EnemyActionNames
  secondaryTargets: (HeroActionNames | EnemyActionNames)[]
}