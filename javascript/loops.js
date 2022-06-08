

// loop through array
const cars = ['Frod','Chevy','Honda','Toyota'];

// for(let i=0; i< cars.length; i++){
//     console.log(cars[i]);
// }

// cars.forEach(function(car){
//     console.log(car);
// });

cars.forEach(function(car,index){
    console.log(`${index} : ${car}`);

})

//map

// const users = [
//     {id:1, name:'John'},
//     {id:2, name:'Sara'},
//     {id:3, name:'Karen'}
// ];

// const ids = users.map(function(user){
//     return user.id; 
// });

// console.log(ids);


// for in
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age:40
}

for(let x in user){
    console.log(`${x}:${user[x]}`);
}