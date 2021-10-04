// function solve(){
//    const canCast = (state) => ({
//     cast: (spell) =>{
//         console.group(`${state.name} case ${spell}`);
//         state.mana--;
//     }
// })
//     const canFight = (state) => ({
//         fight: () => {
//             console.log(`${state.name} slashes at the foe!`);
//             state.stamina--;
//         }
//     })
    
//     const fighter = (name) => {
//         let state = {
//             name, 
//             health: 100,
//             stamina: 100
//         }
//         return Object.assign(state, canFight(state));
//     }

//     const mage = (name) => {
//         let state = {
//             name, 
//             health: 100,
//             mana: 100
//         }
//         return Object.assign(state, canCast(state));

//     }

//     return {mage: mage, fighter: fighter};
// }

function solve() {
    return {
        mage(name) {
            return {
                name,
                health: 100,
                mana: 100,
                cast(spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            }
        },
        fighter(name) {
            return {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    console.log(`${this.name} slashes at the foe!`);
                    this.stamina--;
                }
            }
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);