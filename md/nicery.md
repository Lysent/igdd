# <u>Nicery</u>
Nicery is a turn-based tactical strategy game.

| **Table of Content**                                                                 | **New Content**                                                               |
|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| [Core Mechanics](#core)                                                              | - [Characters](#characters)                                                   |
| - [Tiles](#tile)                                                                     | - [Preparation Phase](#preop)                                                 |
| - [Unit Abilities](#abilities)                                                       | - [Items](#items)                                                             |
| - [UI](#ui)                                                                           | - [Inventory](#inventory)                                                     |
|                                                                                      | - [Skill Tree](#skill)                                                        |
| [Gameplay Mechanics](#gameplay)                                                      |                                                                                |
| - [Characters](#characters)                                                          |                                                                                |
| - [Preparation Phase](#preop)                                                        |                                                                                |
| - [Items](#items)                                                                    |                                                                                |
| - [Inventory](#inventory)                                                            |                                                                                |
| - [Skill Tree](#skill)                                                               |                                                                                |
| - [Hacking](#hacking)                                                                |                                                                                |
|                                                                                      |                                                                                |
|                                                                                      |                                                                                |
| [Examples](#examples)                                                                | [Examples](#examples)                                                          |
| - [Gameplay Examples](#gexamples)                                                    | - [Gameplay Examples](#gexamples)                                             |


## <u>Core Mechanics</u> <a name="core"></a>

#### Tile Grid
The grid on which the game is set is a square grid with each square referred to as a tile. 

### Tile <a name="tile"></a>
A tile contains multiple layers. A preceding layer is required to allow other layers. For instance, if the terrain layer does not support an environment layer, then naturally a unit layer is not supported as well.

- Terrain layer
- Environment/building layer
- Unit layer
- Object layer

#### Terrain
The terrain layer determines the base attributes of a tile. This can include whether a tile can be moved on, can be built on, etc.

| Terrain Stats | Value |     | Info                                                   |
| ------------- | ----- | --- | ------------------------------------------------------ |
| Buildable     | Bool  |     | Whether the tile possesses a environment layer or not. |
| Height        | Int   |     | From 1 to 5, how high the tile is.                     |

#### Environment
The environment layer determines various modifiers for the subsequent unit layer.

| Environment Stats | Value |     | Info                                                |
| ----------------- | ----- | --- | --------------------------------------------------- |
| Walkable          | Bool  |     | Whether or not the tile possesses a unit layer.     |
| Liquid            | Bool  |     | Whether or not the tile is swimmable.               |
|                   |       |     |                                                     |
| Resistance        | Int   |     | Flat amount of resistance added to the unit on top. |

#### Unit Layer
The unit layer determines the unit on a tile. Moving units such as an infantry are considered units, as well as vehicles, stationary artillery, or some buildings.

| Unit Stats  | Value  |     |     | Info                                                                            |
| ----------- | ------ | --- | --- | ------------------------------------------------------------------------------- |
| Movement    | Int    |     |     | How many instances of movement per turn a unit has. If 0, then it has none.     |
| Attack      | Int    |     |     | How many instances of attack per turn a unit has. If 0, then it has none.       |
| Interaction | Int    |     |     | How many instances of interaction per turn a unit has. If 0, then it has none.  |
| Team        | String |     |     | To which faction the unit has allegiance to?                                    |
| Hackable    | Bool   |     |     | Whether or not the unit can be hacked.                                          |
|             |        |     |     |                                                                                 |
| Health      | Int    |     |     | Health of the unit.                                                             |
| Resistance  | Float  |     |     | Resistance of the unit. Counted as a flat percentage (1 armor = 1% resistance). |
| Shielding   | Int    |     |     | Bonus health.                                                                   |
| Speed       | Int    |     |     | How many tiles a unit can traverse per turn.                                    |

#### Object Layer
An object on a tile is interactable by a unit. For instance, this could be spare ammunition on the ground, or a terminal. Multiple objects can be on the same tile.

| Object Stats | Value |     | Info                                                   |
| ------------ | ----- | --- | ------------------------------------------------------ |
| Persistance  | Bool  |     | Does the object dissipate after all uses are expended. |
| Uses         | Int   |     | How many uses an object has.                           |
### Unit Abilities <a name="abilities"></a>
Units can have several abilities used by either their attack instance or interaction instance. 

### UI <a name="ui"></a>
![UI Version 1](../md/img/ui-v1.png)
<a href="../md/img/ui-v1.png">Link to image.</a>

## <u>Gameplay Mechanics</u> <a name="gameplay"></a>

### Characters <a name="characters"></a>
*Note: the contents of this section are specific to Etigeox: Lucern Clock and not the Nicery engine.*

Specially to Lucern Clock gameplay, in each mission, the player is given 4 main characters to control, along with an optional fifth character which can be chosen.

#### Squad Stuttgart
Squad Stuttgart is comprised of the following members: Stuttgart, Mainz, a, a.

#### Fifth Member
A temporary fifth member can be chosen each mission, ranging from mercenaries, other agents, or special characters.

##### Mercenaries
Mercenaries are one of the categories that can be chosen from as candidates for the fifth member.

Mercenaries will cost a certain amount for the mission, taken from the preparation phase budget. They can provide specialized or unique skills.

##### Agents
Agents are one of the categories that can be chosen from as candidates for the fifth member.

Agents do not cost anything to hire. Their skills are more standardized as generalists.

##### Military
Support from the military can be chosen in some missions, ranging from artillery support, airstrike support or strike team support.

### Preparation Phase <a name="preop"></a>
Before each mission, the player is given a budget and has the option to choose a fifth member for the mission, along with opening the skill tree.

#### Budgeting
The player is given a certain budget to purchase equipment and hire a mercenary as the fifth member, if chosen. 

Choosing an item or equipment multiple times across subsequent missions should provide a discount, considering the item should have already been bought in an earlier operation. Some items such as consumables will not have a discount and might even have a price surcharge.

Each unit's inventory is displayed for ease of assigning equipment to characters.

#### Equipment
Equipment functions as a stat change for a character, or a new or improved ability. Equipment is not directly shown in the inventory.

### Items <a name="items"></a>
Items are stored within unit inventories. Their effects can manifest as abilities in an unit's hotbar or can be used directly from the inventory.

### Inventory <a name="inventory"></a>
The inventory screen shows each unit's inventory in one single screen. The inventory is laid out as a 8x2 grid for each unit, with each item possessing weight and taking up one space of the grid.

Units outside of the five starting characters will not have their inventories shown unless necessary. Units must be within at least 2 tiles of each other to transfer items.

### Skill Tree <a name="tree"></a>
The Skill Tree is split between a common skill tree split across the entire player's faction, or for specific units only.

#### Global Skill Tree
The Global Skill Tree is comprised of several interlinked nodes that require prerequisites before research.

#### Individual Skill Trees
Each of the main characters the player is given has an individual, smaller skill tree centered around the character's abilities.

### Hacking <a name="hacking"></a>
Hacking is an ability that can be used by some units.

#### Hacking Units
Hacking an enemy unit can have different results:
- Paralysis
- Debuff
- Team conversion
- Destruction

#### Hacking Nodes
Instead of units, certain objects and abilities can allow the hacking of nodes representing a network system.

Each node is represented by an object on the map, such as a computer or a server.
## Examples <a name="examples"></a>

### Gameplay Examples <a name="gexamples"></a>

#### Integral Example
The following below is an example of what the game could look like, from the title screen to entering a mission.

The player overlooks the buttons available on the title screen, being "Campaign", "Extra", "Options", "Lore Files", or "Quit". 

The player clicks on "Campaign" and is brought to the mission select screen, lists of missions being categorized by operations/chapters. The first operation is the tutorial campaign: dismantling rebels. 

Upon selecting the first mission, the player is brought to the pre-operation phase. The player is given a budget of 50k€ to purchase equipment, run preliminary recon and Intel gathering. 
The player may open the skill tree to adjust skills for the imminent mission.
The player chooses an artillery specialist from the military as a fifth member. This fifth member does not manifest as a fifth starting unit for the player to control, but as a communicator item in the inventory, granting the ability to call in a powerful artillery strike.