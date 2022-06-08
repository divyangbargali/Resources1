let val;

//Number to string
val =String(555);
val = String (4+4);

//Bool to String
val = String(true);

//Date To string.
val = String(new Date());

//Array to String
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();


//String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');

val = parseInt('100.30');// integer main cast kar deta hai (number dega).
val = parseFloat('100.30'); // .(point) ke bad decimal ki value tak dega.

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));
//output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// //output
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2)); // kitne decimal main number chahiye.(String main apply nhi hota sirf number main apply hota hai).like(5.00)

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);