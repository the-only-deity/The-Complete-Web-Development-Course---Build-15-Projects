//ES6
const person = {name: 'John', age: 41};
const {name: n, age: a} = person;
console.log(n, a);

//deep matching
const {country: c, address:{postcode: p, housenumber: hn}} = {country: 'UK', address:{postcode: 'S54ZZ', housenumber: 1}};
console.log(c, p, hn);

//same as {name:name, age:age}
const {name, age} = person;
console.log(name, age);

//default values
const obj = {city: 'London', country: 'UK'}
const {city, country = 'USA'} = obj;
console.log(city, country);
//ES5
//if(obj.country === undefined){}else{}

function processString(x){
    return {value: x, length: x.length}
}
const {value, length} = processString('hello');
console.log(value, length);
