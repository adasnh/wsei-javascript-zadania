// Zadanie 1
function Person(name, lastName, age, country, city, language) {
	this.name = name;
	this.lastname = lastName;
	this.age = age;
	this.country = country;
	this.city = city;
	this.language = language;
	this.changeCity = function (newCity) {
		return (this.city = newCity);
	};
	this.changeAge = function (newAge) {
		return (this.age = newAge);
	};
}
const p1 = new Person('tomasz', 'jodlowiec', 33, 'poland', 'gdynia', 'polish');
const p2 = new Person('anna', 'nowak', 16, 'poland', 'gdansk', 'polish');
const p3 = new Person('adam', 'kot', 34, 'spain', 'madrid', 'spanish');
const p4 = new Person('jolanta', 'wojcik', 66, 'poland', 'gdansk', 'polish');
const p5 = new Person('damian', 'kowalski', 24, 'poland', 'krakow', 'polish');

p1.changeAge(21);
p1.changeCity('Poznan');
console.log(p1, p2, p3, p4, p5);
//Obiekt, na ktorym wywołano metody ma zmienione dane, natomiast pozostałe obiekty są nie zmienione.
//zadanie 2

class Calculator {
	constructor() {
		this.history = [];
	}

	add(x, y) {
		const result = x + y;
		this.history.push({ operation: 'add', x, y, result });
		return result;
	}

	subtract(x, y) {
		const result = x - y;
		this.history.push({ operation: 'subtract', x, y, result });
		return result;
	}
        multiply(x, y) {
		const result = x * y;
		this.history.push({ operation: 'multiply', x, y, result });
		return result;
	}

	divide(x, y) {
		const result = x / y;
		this.history.push({ operation: 'divide', x, y, result });
		return result;
	}

	showHistory() {
		return this.history.forEach((operation) => console.log(operation));
	}

	clearHistory() {
		this.history = [];
	}
}

const calc1 = new Calculator();
calc1.add(1, 2);
calc1.divide(20, 2);
calc1.showHistory();
console.log('calc 2');
const calc2 = new Calculator();
calc2.subtract(18, 4);
calc2.multiply(5, 5);
calc2.showHistory();
calc2.clearHistory();
calc2.showHistory();
console.log(calc2.history);

//Zadanie 3
function Game() {
	this.changeNumber = function () {
		Game.prototype.interval = setInterval(() => {
			Game.prototype.number = Math.round(Math.random() * 10);
			console.log(Game.prototype.number);
		}, 1000);
	};
	this.checkNumber = function () {
		Game.prototype.check = setInterval(() => {
			if (Game.prototype.number > 5) {
				console.log('End');
				clearInterval(Game.prototype.interval);
				clearInterval(Game.prototype.check);
			}
		}, 1000);
	};
}
const game1 = new Game();
const game2 = new Game();
game1.changeNumber();
game2.checkNumber();