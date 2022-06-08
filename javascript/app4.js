const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
let val;
const str = 'Hello there, my name is Brad';
const tags= 'web design, web development, programming';

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is' + firstName + 'and I am ' + age;
// console.log(val);

//Escaping
val = 'That\'s awesome, I can\'t wait';

//Length
val = firstName.length; // gives the number of string.

// concat
val = firstName.concat(' ', lastName); // concating two string.

// Change case.
val = firstName.toUpperCase(); // changing to upper case. 
val = firstName.toLowerCase(); // changing to lower case.
// console.log(val);

val = firstName[0]; // string ka 0 index ka letter dega.

//indexOf()

val = firstName.indexOf('1');
val = firstName.lastIndexOf('1');


//charAt()

val = firstName.charAt('2');

// get last char
val = firstName.charAt(firstName.length-1); // it will always give the last character of the word.


//substring()
val = firstName.substring(0,4); // It will give you character between 0 to 4.

//slice()

val = firstName.slice(0,4);
val = firstName.slice(-3);

//split
val = str.split(' '); // used to split an array.(splitting it by space).
val = tags.split(','); //(splitting it by comma).

//replace
val = str.replace('Brad','jack');


//includes()

val = str.includes('foo');

console.log(val);

