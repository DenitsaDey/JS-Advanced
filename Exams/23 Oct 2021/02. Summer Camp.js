class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){
        if(!this.priceForTheCamp.hasOwnProperty(condition)){
            throw new Error("Unsuccessful registration at the camp.");
        }

        let currParticipant = this.listOfParticipants.find(p => p.name === name);
        if(currParticipant){
            return `The ${name} is already registered at the camp.`;
        } 

        let currPrice = this.priceForTheCamp[condition];
        if(money < currPrice){
            return `The money is not enough to pay the stay at the camp.`;
        }

        currParticipant = {
            name,
            condition,
            power: 100,
            wins: 0
        }
        this.listOfParticipants.push(currParticipant);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name){
        let currParticipant = this.listOfParticipants.find(p => p.name === name);
        if(!currParticipant){
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        let currParticipantIndex = this.listOfParticipants.findIndex(p => p.name == name);
        this.listOfParticipants.splice(currParticipantIndex, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, participant1, participant2){
        let currParticipant1 = this.listOfParticipants.find(p => p.name === participant1);
        if(typeOfGame === 'WaterBalloonFights'){
            let currParticipant2 = this.listOfParticipants.find(p => p.name === participant2);
            if(!currParticipant1 || !currParticipant2){
                throw new Error(`Invalid entered name/s.`);
            }
            if(currParticipant1.condition != currParticipant2.condition){
                throw new Error(`Choose players with equal condition.`);
                
            }
            if(currParticipant1.power == currParticipant2.power){
                return `There is no winner.`;
            } else {
                if(currParticipant1.power > currParticipant2.power){
                    currParticipant1.wins += 1;
                    return `The ${participant1} is winner in the game ${typeOfGame}.`;
                } else{
                    currParticipant2.wins += 1;
                    return `The ${participant2} is winner in the game ${typeOfGame}.`
                }
            }
        } else if(typeOfGame === 'Battleship'){
            if(!currParticipant1){
                throw new Error(`Invalid entered name/s.`);
            }
            currParticipant1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }

    toString(){
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        if(this.listOfParticipants.length > 0){
            this.listOfParticipants.sort((a, b) => b.wins - a.wins)
            .forEach(participant => {
                result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);
            })
        }
        return result.join('\n');
    }
}


// let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
// camp.registerParticipant('Petar Petarson', 'student', 300);
// camp.registerParticipant('Sara Dickinson', 'child', 200);
// camp.unregisterParticipant('Sara Dickinson');
// camp.unregisterParticipant('John Petarson');

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));

console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
