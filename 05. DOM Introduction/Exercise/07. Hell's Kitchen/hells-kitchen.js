function solve() {
    let input = JSON.parse(document.querySelector('#inputs textarea').value);

    let restaurants = {};

    for (let element of input) {
        let [restaurantName, workersData] = element.split(' - ');
        let workersArr = workersData.split(', ');

        if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = { workers: {}, avgSalary: 0, bestSalary: 0 };
        }

        for (let workerInfo of workersArr) {
            let [name, salary] = workerInfo.split(' ');
            restaurants[restaurantName].workers[name] = Number(salary);
        }

        let salaries = Object.values(restaurants[restaurantName].workers);
        restaurants[restaurantName].avgSalary = (salaries.reduce((a, b) => a + b, 0)) / salaries.length;
        restaurants[restaurantName].bestSalary = Math.max(...salaries);
    }

    let bestRestaurant = Object.entries(restaurants)
        .sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];

    let [bestName, bestData] = bestRestaurant;

    let sortedWorkers = Object.entries(bestData.workers)
        .sort((a, b) => b[1] - a[1]);

    let bestRestaurantSpan = document.querySelector('#bestRestaurant span');
    bestRestaurantSpan.textContent =
        `Name: ${bestName} Average Salary: ${bestData.avgSalary.toFixed(2)} Best Salary: ${bestData.bestSalary.toFixed(2)}`;

    let workersP = document.querySelector('#workers p');
    workersP.textContent = sortedWorkers
        .map(([name, salary]) => `Name: ${name} With Salary: ${salary}`)
        .join(' ');
}
