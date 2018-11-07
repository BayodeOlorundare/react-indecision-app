// argument objects - no longer bound with arrow functions

const add = (a,b) => {
    return a + b;
}
console.log(add(1,3))

// this keyword - no longer bound

const user = {
    name: 'Bayode',
    cities: ['Winnipeg', 'Toronto', 'Mississauga'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());