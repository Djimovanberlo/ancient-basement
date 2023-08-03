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
  targets: (HeroActionNames | EnemyActionNames)[]
}

export enum Target {
  SELF = 'self',
  ENEMIES = 'enemies',
  HEROES = 'heroes',
}

export enum TargetType {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}
