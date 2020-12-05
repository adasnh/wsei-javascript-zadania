//Folder 8

// Zadanie 1
const car = {
    marka: "bugatti",
    color: "green",
    vin: "85H28JK211"
}

console.log(car.color);
console.log(car.marka);
console.log(car.vin);
 
// Zadanie 2
const car = {
    marka: "bugatti",
    color: "green",
    vin: "85H28JK211",
    changeName: function(newName){
        this.marka = newName;
        console.log("new name:", this.marka);
    }
}


car.changeName("Ford");
 
// Zadanie 3
let obj = {
 
    sumNumbers: function (tab) {
        this.sum = tab.reduce((a, b) => a + b);
        console.log(this.sum);
    }
}
obj.sumNumbers([2, 5, 3]);
 
// Zadanie 4
let car = {
    name: 'BMW',
    age: 12,
    horsePower: 450
}

 
// Zadanie 5 
let car = {
    name: 'BMW',
    age: 12,
    horsePower: 450,
    wheels: {
        is: true,
        count:4
        
    }
}
  console.log(car.wheels.is, car.wheels.count)

// Zadanie 6

let car = {
    name: 'Mercedes',
}
 
car.horsePower = 350;
car.sayHello = function () {
    console.log('Hello');
}
car.sayHello();