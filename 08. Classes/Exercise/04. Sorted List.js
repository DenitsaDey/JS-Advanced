class List{
    constructor(list = []){
        this.items = list.sort((a,b) => a - b);
        this.size = this.items.length;
    }

    add(element){
        this.items.push(element);
        this.items.sort((a,b) => a - b);
        this.size++;
        return;
    }

    remove(index){
        if(index < 0 || index >= this.items.length){
            throw new Error("Index out of bounds.")
        }
       this.items.splice(index, 1);
       this.size--;
       return;
    }

    get(index){
        if(index < 0 || index >= this.items.length){
            throw new Error("Index out of bounds.")
        }
        return this.items[index];
    }

    
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
