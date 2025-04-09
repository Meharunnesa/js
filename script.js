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


let alength = car.length ;
let list = '<ul>';

let i;

for( i = 0 , i <= alength , i ++)
{
    list += '<li>' + car[i] + '</li>';
}

list += '</ul>';

console.log(list);

