import {JohnTodos, restaurantsList } from './data.js'

// console.log("Class is in Session, lets do this.....");

function myFunction(){console.log("THis is a function")}
// myFunction()
// let const
let myName = "John";
myName = 1;
//  console.log(myName);

//myArrowFunction
const myArrowFunction = () =>{console.log("THis is an arrow function")}
// myArrowFunction()

//Template Strings
const templateStrings = () =>{
    // vanilla way
    let numberPrimary = 1;
    let numberSecondary = 2;


    // console.log("THis is a templateString: " + numberPrimary)

    console.log(`THis is a templateString: ${numberSecondary}`)

}
// templateStrings()

//Importing files
// console.log(JohnTodos.night())

// map()
const restaurants = restaurantsList.filter(specific => specific.type === "Alive")
.map(list =>  list )
console.log(restaurants);