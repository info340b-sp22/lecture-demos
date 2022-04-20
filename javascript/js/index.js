
'use strict'

console.log("hello world!"); //prints 


// let x = 'hello';
// console.log(typeof x)
// x=42;
// console.log(typeof x);

// let hourSlept;
// console.log(hourSlept);
const myArray = [1, 2, 3, 4]
for (let i=0; i < myArray.length; i++)  
{
    console.log(myArray[i])
}

for(let theItem of myArray) { //or loop through array items 
    console.log(theItem)
  }
// const x = 4;
// x = 5; // TypeError: Assignment to constant variable.

// let y = 1.5;
// y = 2; // ok!


// const dinnerOptions = [
//     ['chicken', 'mashed potatoes', 'mixed veggies'],
//     ['steak', 'seasoned potatoes', 'asparagus'],
//     ['fish', "rice", 'green beans'],
//     ['portobello steak', 'rice', 'green beans']
// ];

// const agesObj = {sara:42, amit:35, zhang:13};
// console.log("object:", agesObj);
// console.log("keys", Object.keys(agesObj));
// console.log("object:" + agesObj);

// const person = {
//     firstName: 'Alice',
//     lastName: 'Smith',
//     age: 40,
//     favorites: {
//       music: 'jazz',
//       food: 'pizza',
//       numbers: [12, 42]
//     }
//   };

// const myArray = [1,2,3];
// myArray[0] = 5;
// console.log(myArray);
  
//   console.log(person['firstName']+' '+person['lastName']); //"Alice Jones"
//   const inputtedValue = "food"
 
  
//   const favFood = person['favorites'][inputtedValue]; //object in the object
                
//   console.log(favFood);
 
// const peopleTable = [
//     {name: 'Ada', height: 64, weight: 135},
//     {name: 'Bob', height: 74, weight: 156},
//     {name: 'Chris', height: 69, weight: 139},
//     {name: 'Diya', height: 69, weight: 144},
//     {name: 'Emma', height: 71, weight: 152}
// ]

// console.log(peopleTable[3].height);

// for (let i=1; i<peopleTable.length; i++){
//     console.log(peopleTable[i].weight);
// }