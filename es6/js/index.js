'use strict';

const data = {value: 'index'};

// // normal function declaration
// const foo = function(params) {
//     return 'foo '+params;
//   }

//   const foo = (params) => {
//     return 'foo '+params;
//   }

//   const foo = (params) => 'foo '+params;  

// // concise body
// const foo = (params) => 'foo '+params;
  
//   console.log(foo("parameter1, parameter2"));

// // concise body
// const foo = () => 'foo ';
  
//   console.log(foo("parameter1, parameter2"));


// function renderHeader() {
//     // document.createElement(...);
//     const whatToDoWhenClicked = (event) => {

//     }
    
// }

// element.addEventListener('click', (event) => {
//     console.log("clicky");
// })

// const myArray = [1, 2, 3, 4, 5];
// const [x, y, z] = myArray; //myArray elements to `x`, `y`, `z`
// console.log(x); //=> 1;
// console.log(y); //=> 2;
// console.log(z); //=> 3;

// //destructuring objects
const myObject = {a: 1, b: 2, c:3, d:4};
// const {a, b, c} = myObject; //myObject.a to a, etc.
// console.log(a); //=> 1
// console.log(b); //=> 2;
// console.log(c); //=> 3;

// //order doesn't matter with objects
// let {c, b, a} = myObject;
// console.log(myObject)
// console.log(a); //=> 1
// console.log(b); //=> 2;
// console.log(c); 

// //=> 3;
// // only the keys we include get assigned, the others get ignored
// const {a, c} = myObject;
// console.log('a', a);
// console.log('c', c);



//an example person object
// const person = {name: 'Ada', height: 64, weight: 135}

// // expects a person object
// function getBMI(personObj) {
//     const height = personObj.height;
//     const weight = personObj.weight;

//     return 703*weight/(height*height);
// }

// //a function that expects a person object
// function getBMI({height, weight}) {
//     return 703*weight/(height*height);
// }

// const adaBMI = getBMI(person);
// console.log(adaBMI);


// // implicit destructured

//spread operator example
// const person = {name: 'Ada', height: 64, weight: 135}
// const person2 = person;

// person2.name = 'Ada 2';
// console.log (person);
// console.log(person2);

// //instead, use the spread operator to get a new object

// const person3 = {...person};
// console.log(person3);
// person3.name = 'Ada3';
// console.log (person);
// // console.log(person2);
// console.log(person3);
// console.log (person);

// const person4 = {...person, hat: 'bowler'};
// console.log(person4);

// const array = [1,2,3,4,5]
// const longerArray = [...array, 6,7,8]

// console.log(array);
// console.log(longerArray);


// const original = {a:1, b:2, c:[3,4]}
// const first = original;
// const second = {...original};

// trueClone = {...original, c: [...original.c]}


// import {foo, bar} from './other.js';
// console.log(foo);
// console.log(foo());
// console.log(bar);


// import {peopleArray} from './other.js';
// console.log(peopleArray);

//pre-written messages
let MESSAGES = ['Hello world!', "Goodbye y'all", "silence", "...", "Bueller?"];


// //Example 1

// class Card {
//     constructor(message) {
//         this.message = message;
//     }

//     render() {                                  //render a DOM representation of the card
//         let cardDiv = document.createElement('div');
//         cardDiv.classList.add('card');
//         cardDiv.textContent = this.message;
//         return cardDiv;
//     }
// }

// // "main work Example 1

// let card = new Card("Hello world");
// let renderedCard = card.render();
// let contentElem = document.querySelector('#content');
// contentElem.appendChild(renderedCard);



// // Example 1a 

// contentElem.appendChild(new Card("SnowDay").render());


// //main work Example 2

// class Card {
//     constructor(message) {
//         this.message = message
//     }

//     render() {                                  //render a DOM representation of the card
//         let cardDiv = document.createElement('div');
//         cardDiv.classList.add('card');
//         cardDiv.textContent = this.message;
//         return cardDiv
//     }
// }

// let cards = MESSAGES.map(function (msg) {            // create an new array by mapping messages to cards
//     return new Card(msg);
// })

// cards.forEach(function (card) {                       // now render each of the cards in the array
//     document.querySelector('#content').append(card.render())

// })



// // Example 3

// class Card {
//     constructor(message, initial) {              // we've added a new parameter 'initial' to argument list 
//         this.message = message
//         this.clickedCount = initial
//     }

//     render() {
//         let cardDiv = document.createElement('div');
//         cardDiv.classList.add('card');
//         cardDiv.textContent = (this.message + " " + this.clickedCount);
//         return cardDiv
//     }
// }

// //main work Example 3
// let cards = MESSAGES.map(function (msg, idx) {       //the map function has as it's second argument the index
//     return new Card(msg, idx)
// })

// cards.forEach(function (card) {
//     document.querySelector('#content').append(card.render())
// })



// // Example 4

// class Card {
//     constructor(message, initial){
//         this.message = message
//         this.clickedCount = initial
//     }

//     render() {
//         let cardDiv = document.createElement('div');
//         cardDiv.classList.add('card');
//         cardDiv.textContent = (this.message + " " + this.clickedCount);

//         // here the "this" variable is defined as the card
//         // console.log("out of callback", this)

//         cardDiv.addEventListener("click", function(){
//             this.clickCount++;
//             // In here the "this" object is defined as the window (browser) and the windows object doesn't have a .message() method
//             console.log("You clicked on "+this.message)
//         })

//         return cardDiv
//     }
// }

// //main work Example 4
// let cards = MESSAGES.map(function (msg, idx) {       //the map function has as it's second argument the index
//     return new Card(msg, idx)
// })

// cards.forEach(function (card) {
//     document.querySelector('#content').append(card.render())
// })

// // see function is called on some object even if it's undefined
// function foo() {console.log("I was called on", this);}
// foo();



// // Example 4a

// class Card {
//     constructor(message, initial) {
//         this.message = message
//         this.clickedCount = initial
//     }

//     render() {
//         let cardDiv = document.createElement('div');
//         cardDiv.classList.add('card');
//         cardDiv.textContent = (this.message + " " + this.clickedCount);

//         // //  click callback function was in normal anonymous syntax
//         // cardDiv.addEventListener("click", function () {
//         //     this.clickCount++;
//         //     // In here the "this" object is defined as the window (browser) and the windows object doesn't have a .message() method
//         //     console.log("You clicked on " + this.message)
//         // })

//         //  click callback function was in using arrow syntax
//         cardDiv.addEventListener("click",  () => {
//             this.clickCount++;
//             // In here the "this" object is defined as the window (browser) and the windows object doesn't have a .message() method
//             console.log("You clicked on " + this.message)
//         })

//         return cardDiv
//     }

// }

// //main work Example 4a

// // // messages map call back was in normal anonymous syntax
// // let cards = MESSAGES.map(function (msg, idx) {       //the map function has as it's second argument the index
// //     return new Card(msg, idx)
// // })

// // anonomous function changed to arrow function syntax
// let cards = MESSAGES.map((msg, idx) => {       //the map function has as it's second argument the index
//     return new Card(msg, idx)
// })


// // // cards forEach call back was in normal anonymous syntax
// // cards.forEach(function (card) {
// //     document.querySelector('#content').append(card.render())
// // })


// // // anonomous function changed to arrow function syntax
// cards.forEach((card) => {
//     document.querySelector('#content').append(card.render())
// })


// // another confusing example
// let foo = () => 'foo and more foo';
// console.log(foo());


// // Example 5

// class Card {
//     constructor(message, initial) {
//         this.message = message;
//         this.clickedCount = initial;
//         this.cardDiv = document.createElement('div');
//         this.cardDiv.classList.add('card');

//     }

//     incrementCount() {
//         this.clickedCount++;
//         this.cardDiv.textContent = (this.message + " " + this.clickedCount);
//     }
//     render() {
//         this.cardDiv.textContent = (this.message + " " + this.clickedCount);
//         this.cardDiv.addEventListener("click", () => this.incrementCount())
//         return this.cardDiv;
//     }


// }

// // "main work"

// let cards = MESSAGES.map((msg, idx) => new Card(msg, idx))

// cards.forEach((card) => {
//     document.querySelector('#content').append(card.render())
// })