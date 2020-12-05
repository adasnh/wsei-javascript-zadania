//Zad 1

const person = {
	name: 'tomasz',
	lastName: 'smokowski',
	age: 40,
	city: 'warszawa',
	printInfo() {
		console.log(this.name, this.lastName, this.age, this.city);
	},
	addAge() {
		this.age++;
	},
};

const person2 = {
	name: 'mateusz ',
	lastName: 'borek',
	age: 39,
	city: 'Warszawa',
	printInfo() {
		console.log(this.name, this.lastName, this.age, this.city);
	},
	addAge() {
		this.age++;
	},
};

person.printInfo();
person.addAge();
person2.addAge();
person.printInfo();
person.addAge();
person.addAge();
person2.addAge();

console.log(person.age, person2.age);
//Zadanie 2
person.favouriteMeal = [];
person2.favouriteMeal = [];
person.printFavouriteMeal = function () {
	console.log(this.favouriteMeal);
};
person2.printFavouriteMeal = function () {
	console.log(this.favouriteMeal);
};

person.addMeal = function (meal) {
	this.favouriteMeal.push(meal);
};

person2.addMeal = function (meal) {
	this.favouriteMeal.push(meal);
};

person.addMeal('pizza');
person.showFavouriteMeal();
person2.showFavouriteMeal();

//Zadanie 3
const calculator = {
	a: 0,
	b: 0,
	saveAandB(a, b) {
		this.a = a;
		this.b = b;
	},
	sum() {
		console.log(this.a + this.b);
		return this.a + this.b;
	},
	subtract() {
		console.log(this.a - this.b);
		return this.a - this.b;
	},
	multiply() {
		console.log(this.a * this.b);
		return this.a * this.b;
	},
	divide() {
		if (this.b === 0) {
			console.log('You cant divide by 0');
			return;
		}
		console.log(this.a / this.b);
		return this.a / this.b;
	},
};

calculator.saveAandB(5, 8);
calculator.sum();
calculator.subtract();
calculator.divide();
calculator.multiply();
calculator.saveAandB(10, 0);
calculator.divide();

//Zadanie 4

let ladder = {
    currentStep: 0,
    moveUp: function() {
        this.currentStep++;
    },
    
    moveDown: function() {
        if (this.currentStep <= 0) {
            this.currentStep = 0;
            console.info("You are at the bottom already.");
            
            return;
        }
        this.currentStep--;
    },

    writeCurrentStep: function() {
        console.log(`Current Step: ${this.currentStep}`);
    }
};
