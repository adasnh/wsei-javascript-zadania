// Zadanie 1.
let searchLi = document.querySelectorAll('.list');

// Zadanie 2.
let findTags = function(tagName) {
    return document.querySelectorAll(tagName);
}
let find = findTags('ul');

// Zadanie 3.
let save = document.querySelector('#list');

//Zadanie 4
const showElements = (element) => console.log(element);
showElements(document.querySelectorAll('li'));
showElements(document.querySelectorAll('ul'));
showElements(document.querySelectorAll('span'));
showElements(document.querySelectorAll('div.list span'));
showElements(document.querySelectorAll('#spans span'));