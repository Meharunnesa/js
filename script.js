console.log('hello');

let x = 12423;
let newx = x.toString();
console.log(typeof newx);


let y = 349856026512985;
console.log(y.toExponential());
console.log(y.toExponential(2));
console.log(y.toExponential(4));
console.log(y.toExponential(6));

let z = 3.52346;
console.log(z.toFixed());
console.log(z.toFixed(2));
console.log(z.toFixed(4));
console.log(z.toFixed(6));

console.log(z.toPrecision());
console.log(z.toPrecision(2));
console.log(z.toPrecision(4));
console.log(z.toPrecision(6));

console.log(parseInt("20 50 34"));

const cars = ["Saab", "Volvo", "BMW"];
document.getElementById('demo').innerHTML = cars;
//document.getElementById('demo').innerHTML = cars[1];

const person = {firstname:'Meharunnesa', lastname:'Bristy', age:25};


console.log(typeof cars);

// array

const car = ['Saab', 'Volvo', "BMW"];
document.getElementById('array').innerHTML = car ;
document.getElementById('array').innerHTML = car.length ;
document.getElementById('array').innerHTML = car[ car.length - 1 ] ;

console.log(typeof car);


// let alength = car.length ;
// let list = '<ul>';

// let i;

// for( i = 0 , i <= alength , i ++)
// {
//     list += '<li>' + car[i] + '</li>';
// }

// list += '</ul>';

// console.log(list);

// array loop

let carlen = cars.length;

text = "<ul>";

for(let i = 0 ; i < carlen ; i++){
    text += "<li>" + cars[i] + "</li>";
}

text += "</ul>";

document.getElementById('demo').innerHTML = text;

// array foreach

function myFunction(value){
    console.log(value);
}

cars.forEach(myFunction);


// array push

cars.push("bristy");
console.log(cars);

cars[cars.length] = "meharun" ;
console.log(cars);

// checking array or not array

console.log(Array.isArray(cars));

console.log(Array.isArray(person));

console.log(cars instanceof Array);

console.log(cars instanceof Object);

console.log(person instanceof Array);

console.log(person instanceof Object);

