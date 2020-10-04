//zadanie 1

// Zadanie 1
let n1 = 15,
    n2 = 6;

if(n1 > n2){
  console.log(n1);
} else {
    console.log(n2);
}


//zadanie 2

let n1 = 2,
n2 = 4,
n3= 5;


if(n1>n2 && n1>n3){
    console.log(n1 + ' jest największe');
}else if ( n2>n1 && n2>n3) {
    console.log(n2 + ' jest najwieksze');
} else{
  console.log( n3+ ' jest najwiekszy');
} 

//zadanie 3

for (let i=0; i<10; i++) {
    console.log("Lubię JavaScript");
}

//zadanie 4

//zadanie 4
let result = 0;
for(i=0; i<=10; i++){
    result += i;
}
console.log(result);


//zadanie 5

//zadanie 5
var n = 5;
for(let i=0; i<n; i++){
    if (i%2 === 0){
        console.log(i + " parzysta");
    }else{
        console.log(i + " nieparzysta");
    }
}

// zadanie 6

let n = 5;

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        console.log("i= " + i + ", j= " + j);
    }
}
//zadanie 7

for(let i = 0; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0){
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0){
        console.log(`${i} Buzz`);
    } else{
        console.log(`${i}`);
    }
}

// zadanie 8

//a)

let star = 5;
let result = '';

for(let i = 1; i <= star; i++){
    for(let j = 0; j < i; j++){
         result += "*";
    }
    console.log(result);
    result = ""
}

//b)

//c)

//d)

//e)