// primitive data types in javascript
// String
// Number
// Boolean
// null
// undefined
// Symbols


// Types are associated with values not variables
// The same variable can hold multiple Types
// we do not need to specify types.
// Most other languages are statically typed (java,c#,c++)
// There are supersets of JS and addons to allows static typing (Typescript, Flow)

//PRIMITIVE

//String

//const name ='John Doe';
//console.log(typeof name); // it will tell the type of a variable.(quoes will make a variable string even if it is a number).
const age = 45;

//Boolean
const hasKids = true;// boolean does not have quotes around them
// console.log(typeof hasKids);

//Null 
// const car = null;
// console.log(typeof car);

// //undefined
// let test;
// console.log(typeof test);

// //symbol
// const sym = Symbol();
// console.log(typeof sym);

// Reference types
//Array
const hobbies = ['movies','music'];

//Object Literal
const address ={
    city:'Boston',
    state:'MA'
}
// console.log(typeof address);

const today = new Date();

// console.log(today);