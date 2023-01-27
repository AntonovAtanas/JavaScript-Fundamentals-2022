function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let arrInput = JSON.parse(document.getElementsByTagName('textarea')[0].value);
      let bestRestaurantText = document.querySelector('#bestRestaurant p');
      let allWorkers = document.querySelector('#workers p');

      let allRestaurants = {};

      for (const restaurant of arrInput) {
         let [restaurantName, workers] = restaurant.split(' - ');
         let workersArr = workers.split(', ');

         if (!allRestaurants.hasOwnProperty(restaurantName)) {
            allRestaurants[restaurantName] = { workers: [] };
         }

         for (const currentWorker of workersArr) {
            allRestaurants[restaurantName].workers.push(currentWorker)
         }
      }
     
      let bestRestaurant = {};
      let averageSalary = 0;

      for (const restaurantName in allRestaurants) {

         let totalSalary = 0;
         let bestSalary = 0;

         for (const currentWorker of allRestaurants[restaurantName].workers) {
            let [workerName, salary] = currentWorker.split(' ');
            salary = Number(salary)
            totalSalary += salary;
            if (salary > bestSalary) {
               bestSalary = salary;
            }
         }

         let currentAverageSalary = totalSalary / allRestaurants[restaurantName].workers.length;

         if (currentAverageSalary > averageSalary) {
            averageSalary = currentAverageSalary;
            bestRestaurant = {};
            bestRestaurant.name = restaurantName;
            bestRestaurant.workers = allRestaurants[restaurantName].workers;
            bestRestaurant.avgSalary = currentAverageSalary;
            bestRestaurant.bestSalary = bestSalary;
         }
      }
      
      bestRestaurantText.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      let restaurantWorkers = ''

      bestRestaurant.workers.sort((a, b) => {
         let [nameA, workerASalary] = a.split(' ');
         let [nameB, workerBSalary] = b.split(' ');

         return Number(workerBSalary) - Number(workerASalary);
      })

      for (const currentWorker of bestRestaurant.workers) { 
         let [workerName, workerSalary] = currentWorker.split(' ');
         restaurantWorkers += ` Name: ${workerName} With Salary: ${workerSalary}`
      }
      allWorkers.textContent = restaurantWorkers
   }
}