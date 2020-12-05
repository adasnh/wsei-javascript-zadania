//Zadanie 1
const buz = document.querySelector('#buz');
console.log(buz.parentElement);

const baz = document.querySelector('#baz');
console.log(baz.previousElementSibling);

const foo = document.querySelector('#foo');
console.log(foo.children);
console.log(foo.parentElement);
console.log(foo.firstElementChild);
console.log(foo.children[1]);

//Zadanie 2
let addEvent = function(elementId) {
        let element = document.querySelector(`#${elementId}`);
        element.addEventListener('click', function(event) {
            console.log(event.target.textContent.trim());
        });
    }
    addEvent('ex2');
//Zadanie 3, //Zadanie 4
 document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
        });
    });


toggleSpan();
//Zadanie 4
   document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            event.target.parentElement.style.backgroundColor = randomColor;
        });
    });
    const variant = 1;
    document.querySelectorAll('#ex5 div').forEach((div) => {
        div.addEventListener('mouseover', function () {
            let targetColor = this.style.backgroundColor;
            let elements;
    
            if (variant === 1) {
                elements = div.parentElement.querySelectorAll('li:first-of-type');
            } else if (variant === 2) {
                elements = div.parentElement.querySelectorAll('li:last-of-type');
            } else if (variant === 3) {
                elements = div.parentElement.querySelectorAll('li:nth-of-type(even)');
            } else if (variant === 4) {
                elements = div.parentElement.querySelectorAll('li');
            } else {
                elements = div.parentElement.querySelectorAll('ul');
            }
    
            elements.forEach((element) => {
                element.style.backgroundColor = targetColor;
            });
        });
    
        div.addEventListener('mouseout', function () {
            div.parentElement.querySelectorAll('ul, li').forEach((element) => {
                element.style.backgroundColor = null;
            });
        });
    });

//Zadanie 6

const ex6Div = document.querySelector('#ex6');
//1
const first = ex6Div.firstElementChild.firstElementChild.firstElementChild;
console.log(first);
const second =
	ex6Div.firstElementChild.parentElement.firstElementChild.firstElementChild
		.nextElementSibling.parentElement;
console.log(second);

const third =
	ex6Div.parentElement.firstElementChild.parentElement.firstElementChild
		.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
console.log(third);
