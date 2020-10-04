//zadanie 1

let x = true,
    y = false;

console.log(x === y);

//zadanie 2

const numOne = 10;
const numTwo = 3;

let moduloResult = 0;
moduloResult = numOne % numTwo;
console.log(moduloResult); //1

//zadanie 3

let stringsResult = "",
    a = "test",
    b = "foo";

stringsResult = a + b;
console.log(stringsResult);

//zadanie 4

var someNumber = 425;
var someString = "425";

console.log(someNumber==someString); // ta sama wartosc pomijając typy (wynik true)
console.log(someNumber===someString); // inny typ wartosci (wynik false)

// zadanie 5


let counter = 30;

console.log(counter); //30

counter++; 
console.log(counter); // 31

counter--;
console.log(counter); // 30


//zadanie 6


let n1 = 5,
    n2 = 6,
    result = null;
    
result = n1 > n2;

console.log(result); // false