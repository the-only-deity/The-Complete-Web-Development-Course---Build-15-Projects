//ES5
var x = 1;
var y = 2;

//ES6
const [a, b] = [3, 4];
console.log(a);
console.log(b);

//process return values in array format
function processString(x){
    return [x, x.length];
}

console.log(processString('hello'));

//result
//value = result.value
//length = result.length

const [value, length] = processString('hello');
console.log(value);
console.log(length);

//swap values of two variables
//var c = 1;
//var d = 2;
//ES5
//var e = c;
//c = d;
//d = e;
//console.log(c, d);

let [c, d] = [1, 2];
[c, d] = [d, c];
console.log(c, d);

//default values
let list = ['London', 'England'];
let [city, country = 'USA'] = list;
console.log(city, country);

//ES5
//var city = list[0];
//var country = list[1] === undefined ? 'USA' : list[1];
//console.log(city, country);


