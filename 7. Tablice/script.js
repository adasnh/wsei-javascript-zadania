// zadanie 1

const tab = ["Bartek", "ma", "długopis"];
console.log( tab[0] ); 
console.log( tab[1] ); 
console.log( tab[2] );     


// Zadanie 2

    const tab = ["Bartek", "ma", "długopis", 3, 5];
    console.log( tab[0] ); 
    console.log( tab[1] ); 

console.log(tab[tab.length - 1]);
        
for(let i=0;i<tab.length;i++)
    {
        console.log(tab[i]);
    }
for(let i=0;i<tab.length;i+=2)
    {
        console.log(tab[i]);
    }

tab.forEach(el => {
    if(typeof(el) === 'string'){
        console.log(el);
    }
});

tab.forEach(el => {
    if(typeof(el) === 'number'){
        console.log(el);
    }
});


// zadanie 3

const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
//1
const sum = t2.reduce((acc, number) => (acc + number));
console.log(sum)
//2
const dif = t2.reduce((acc, number) => (acc - number));
console.log(dif)
//3

const avg = sum / t2.length;
console.log(avg);

//4
t2.forEach((el) => {
	if (el % 2 === 0) {
		console.log(el);
	}
});

//5
t2.forEach((el) => {
	if (el % 2 !== 0) {
		console.log(el);
	}
});
//6
const result = t2.sort((a,b) => a - b);
console.log('max:', result[result.length - 1])

//7
t2.sort((a,b ) => b - a );
console.log('min', result[result.length - 1])

//8
t2.reverse().forEach(el => console.log(el))

// zadanie 4

const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
const func = tab => tab.reduce((a,b)=>a+b);
console.log(func(t2));

// zadanie 5

const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
const func = tab => tab.reduce((a,b)=>a+b);
function A(tab){
    const sum = tab.reduce((a,b)=>a+b);
    const avg = sum / tab.length;
    const result = tab.map(el => console.log(el * avg))
}

A(t2)

// zadanie 6

const averageArrFunc1 = (arr = []) => {
    let counter = 0,
        value = 0;

    arr.forEach(el => {
        if (el % 2 === 0) {
            value += el;
            counter++;
        }
    });

    return Math.round(value / counter);
};

console.log(averageArrFunc1([9, 1, 7, 2, 1, 1, 6, 3, 2]));

//zadanie 7 
const sortArray = randomTab.sort((a, b) => a - b);
console.log(sortArray);

// zadanie 8

const arraySum1 = [2, 3, 2]
const arraySum2 = [1, 4, 3]

function sumArrayValue(array1, array2) {
    let newArray = [];
    array1.forEach((num1, i) => {
        newArray.push(num1 + array2[i]);
    });

    return newArray;
}

console.log(sumArrayValue(arraySum1, arraySum2));

//zadanie 10
const arrayNum = [-4, 7, -1, 15, -33];

function changeElement(array) {
    return array.map(i => i *= -1); 
}

console.log(changeElement(arrayNum));