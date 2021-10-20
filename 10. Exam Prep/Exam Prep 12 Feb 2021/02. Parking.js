class Parking{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber){
        if(this.vehicles.length >= this.capacity){
            throw new Error('Not enough parking space.')
        }
        this.vehicles.push({carModel, carNumber, payed: false});
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber){
        let searchedCar = this.vehicles.find(x => x.carNumber === carNumber);
        if(!searchedCar){
            throw new Error(`The car, you're looking for, is not found.`);
        }
        if(!searchedCar.payed){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } else{
            let indexOfSearchedCar = this.vehicles.findIndex(x => x.carNumber === carNumber);
            this.vehicles.splice(indexOfSearchedCar, 1);
            return `${carNumber} left the parking lot.`
        }
    }

    pay(carNumber) {
        let searchedCar = this.vehicles.find(x => x.carNumber === carNumber);
        if(searchedCar == undefined){
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if(searchedCar.payed){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        } else{
            searchedCar.payed = true;
            
            return `${carNumber}'s driver successfully payed for his stay.`
        }
    }

    getStatistics(carNumber){
        let emptySlots = this.capacity - this.vehicles.length;
        let result = [];
        if(!carNumber){
            result.push(`The Parking Lot has ${emptySlots} empty spots left.`);
            this.vehicles.slice()
            .sort((a,b) => a.carModel.localeCompare(b.carModel))
            .forEach(car => {
                result.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`);
            });

            return result.join('\n');
        } else{
            let carStats = this.vehicles.find(x => x.carNumber === carNumber);
            return `${carStats.carModel} == ${carStats.carNumber} - ${carStats.payed ? 'Has payed' : 'Not payed'}`;
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
