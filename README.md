# The Ancient Basement

### Basic game mechanics

- Player is either on splash screen or active screen
- While active, player completes fights in jRPG style. When they are defeated, the player returns to the splash screen and can start over
- Each fight rewards a number of randomized things: items, abilities and equipment
- Some equipment and abilities are epic. These equipment and abilities persist onto the next run! This amounts to the Ancient Basement being a jRPG rogue-lite
- There is a final boss, but it is hard to reach and would require mutliple runs

### Basic tech

- React typescript
- SASS
- Redux toolkit
- Game data like party status and items should be stored in localStorage ONLY when the player loses - otherwise the player can refresh to retry turns or fights if they don't work out

### Flavor

Parodying dungeons and dragons and Lufia II (for super NES), the Ancient Basement combines SNES era jRPG and typical ultra-nerd flavors. Imagine four friends sitting in their basement playing this game in real life - the four heroes actually look like contemporary ultra nerds, but with classic RPG clothing: starred robes, gladiatoresque armor et cetera. The imaginary heroes and enemies are hand-drawn sprites and the sounds are mouth-made. This should result in a kind of arts-and-crafts, almost primitive style.

The player controls 4 heroes: Irene, Chad, Olive and Eugene.

- Irene is a thin, nerdy girl with glasses, bracket locks in knight's armor
- Chad is a massive neckbearded nerd wearing starred robes
- Olive is a plump e-girl / anime girl wearing a gladiatoresque outfit, cat ears and big sword
- Eugene is a thin emo nerd with black hair covering half his face. He wears a long black coat

### Terminology

- Player = end user
- Hero: character controlled by player
- Enemy: character controlled by the game
- Character: either hero or enemy

- STR: strength: increases physical damage dealt
- DEF: defense: reduces physical damage taken
- INT: intelligence: increases magic damage dealt and magic crit chance
- WIS: wisdom: increases healing done and magic dodge chance
- RES: resistance: reduces magic damage taken and
- AGI: agility: determines turn order and increases physical crit and dodge chance

- Health: hit points
- Mana: spent using abilities

- Status effect: something that effects the character (see additional gameplay mechanics)
- Buff: beneficial effects
- Debuff: disadvantageous effects

---

- Game: the overall game; a game is made up of rounds
- Round: an instance of a battle; heroes receive rewards at the end of a round
- Turn: an individual character's turn within the round
- Action: a character can choose one action each turn

  - Attack: attack with STR or INT and/or an element based on your equipped weapon
  - Defend: increase DEF and RES for a turn and move up in order of next turn
  - Ability: Use an ability from the global inventory
  - Item: use an item from the global inventory (use once)
  - Inventory: swap an equipped piece with another hero or global inventory

### Splash Screen

Player has option to

- Start a new game - thereby deleting progress of current game
- Continue current game - meaning starting a new run with previously obtained epics
- Read rules by way of modal

### Active screen

Each fight is split up in turns. Every character does one action per turn
During a fight, the player may face 1 to 4 enemies
The order in which characters do actions is re-calculated every turn (see stats for more info)
When it's their turn, a hero can do 1 of these things:

- Attack: attack a single enemy. The hero uses their weapon to attack. Depending on the used weapon, this can be physical or magic damage and can have an elemental augmentation (see elements for more info)
- Defend: increase DEF and RES for one turn and move to the front for next turn order
- Item: use an item from the shared inventory
- Ability: use an ability from the shared spellbook. Abilities can be single target or AoE (always like Golden Sun - one focus with two adjacent enemies als taking damage) and always have an elemental augmentation
- Equip: equip an item from another hero's or shared inventory to the current hero's inventory - or equip an item from the current hero's inventory to another hero's the shared inventory. Equip also displays the heroes' stats and statuses

Enemies can do 1 of a number of things, depending on the enemy

- They might attack, defend or cast a spell
- The target or targets depends on the enemy - it might be random, targest the highest/lowest of a stat or something else

During the active screen, players can also click on more info icons, allowing them to read the meaning of certain game mechanics or icons

### Stats

Primary stats

- Health: Hit points; when it reaches 0, the hero is defeated
- Mana: spend mana to execute abilities

Secondary stats

- STR: determines the power of physical attacks
- DEF: reduces the damage from physical attacks
- INT: determines the power of magic attacks
- RES: reduces the damage from magic attacks
- AGI: determines the turn order: higher agi means earlier turn

### Elements

### Additional gameplay mechanics

Status effects, buffs and debuffs: There are a number of status effects, like poisons or buffs

- Buffs include +any stat, or +any element
- Debuffs include -any stat, or -any element
- Some abilities allow dispelling of buffs or debuffs
- The design should be relatively simple, so that the status is clear from seeing icons, with no reading required
