export enum HeroActionName {
  ATTACK = 'attack',
  DEFEND = 'defend',
  ABILITY = 'ability',
  ITEM = 'item',
  INVENTORY = 'inventory',
}

export enum EnemyActionName {
  ATTACK = 'attack',
  DEFEND = 'defend',
  ABILITY = 'ability',
}

export interface CharacterActionActors {
  usedBy: HeroActionName | EnemyActionName
  targets: (HeroActionName | EnemyActionName)[]
}

export enum TargetType {
  SELF = 'self',
  ENEMIES = 'enemies',
  HEROES = 'heroes',
}

export enum TargetAreaType {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}
