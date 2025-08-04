//create an empty array. 
//Using a for loop insert three functions logging their corresponsing index inside the array.
//provide the solution in both ES5 and ES6


//ES6 (easiest)
let cars = [];
for(let i = 0; i < 3; i ++){
    cars[i] = function(){
        console.log(i);
    };
}

cars[0]();
cars[1]();
cars[2]();



//ES5
var bikes = [];
function f(x){
    return function(){
        console.log(x);
    };
}
for(var i = 0; i < 3; i ++){
    bikes[i] = f(i);
}

bikes[0]();
bikes[1]();
bikes[2]();