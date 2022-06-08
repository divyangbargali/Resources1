// Create Some arrays.

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple','Banana','Orange','Pear'];
const mixed =[22,'Hello',true, undefined, null, {a:1,b:1}, new Date()];

let val;

// Get Array length.
// val = numbers.length;

//check if is array.
// val = Array.isArray(numbers);

//Get Single Value
// val = numbers[3];
// val = numbers[0];

// Insert into array.
// numbers[2] = 100;

//Find index of value
// val = numbers.indexOf(36);

//Mutating Arrays.

// numbers.push(250); // array ke last main number add kar denge.

//Add on to front.
// numbers.unshift(120);

//Take off from end
// numbers.pop();

//Splice values
// numbers.splice(1,1); // removing the values ( starting from 1 and ending from 1).

// Concatenate Arrays
// val = numbers.concat(numbers2); // adding two arrays.

//sorting arrys.
val = numbers.sort(); // It sort by the first numbers.

// use the "compare function"
val = numbers.sort(
function(x,y){
    return x-y;
}
); // Sorting array properly.

//Reverse sort.
val = numbers.sort(function(x,y){
    return y-x;
});// sorting the array in reverse way.

//Find 

function under50(num){
    return num<50;
}

val = numbers.find(under50); // for finding the numbers.

// console.log(numbers);
console.log(val);