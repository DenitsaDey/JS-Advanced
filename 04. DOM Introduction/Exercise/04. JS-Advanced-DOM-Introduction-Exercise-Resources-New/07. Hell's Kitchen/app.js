function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let bestRestaurantP = document.querySelector('#bestRestaurant>p');
   let workersP = document.querySelector('#workers>p');
   let input = document.querySelector('#inputs>textarea');

   function onClick() {
      let arr = JSON.parse(input.value);

      let restaurants = {};
      arr.forEach((line) => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');
         let workers = [];
         let averageSalary = 0;
         let bestSalary = 0;

         for (let worker of workersArr) {
            const workerTokens = worker.split(' ');
            workers.push({
               name: workerTokens[0],
               salary: Number(workerTokens[1])
            })

         }
         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }




         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);

         bestSalary = workers[0].salary;
         averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
         
         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      })

      let bestRestaurant = undefined;
      let bestRestaurantSalary = 0;

      for(const name in restaurants){
         if(restaurants[name].averageSalary > bestRestaurantSalary){
            bestRestaurant = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
            }

            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }

      bestRestaurantP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      let workersResult = [];

      bestRestaurant.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })

      workersP.textContent = workersResult.join(' ');
   }
}