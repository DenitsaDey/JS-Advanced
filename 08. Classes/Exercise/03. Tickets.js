function sortedSummary(ticketArr, sortingCriteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let allTickets = [];
    
    ticketArr.forEach(element => allTickets.push(new Ticket(element.split('|')[0], element.split('|')[1], element.split('|')[2])));

    let sortedTickets = [];
    if(sortingCriteria === 'destination'){
        return allTickets.sort((a, b) => (a.destination).localeCompare(b.destination));
    }
    else if(sortingCriteria === 'price'){
        return allTickets.sort((a, b) => Number(a.price) - Number(b.price));
    }
    else if(sortingCriteria === 'status'){
        return allTickets.sort((a, b) => (a.status).localeCompare(b.status));
    }
    
}

console.log(sortedSummary(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));