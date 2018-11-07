
//Common to use uppercase class names
//Set defaults in Constructor or leave blank if !used
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //Template string with ``
        return `Hi, I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`
    }
}

//Subclass
//The Super method calls the parent class arguments
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor () {
        return !!this.major; 
    }
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` Thier major is ${this.major}.`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    homeLocation() {
        return this.location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation()){
            greeting += ` I'm visiting from ${this.location}.`
        }
        return greeting;
    }
}

const me = new Traveler('Bayode Olorundare', 28, 'Winnipeg, Manitoba');
console.log(me.getGreeting());

//Test defaults
const other = new Traveler();
console.log(other.getGreeting());