//ES5
function f(arr){
    console.log('hello ' + arr[0] + ' ' + arr[1]);
}
f(['Bill', 'Gates']);

//ES6
//parameter matching
function g([firstname, lastname]){
    console.log(`hello ${firstname} ${lastname} !`);
}
g(['Bill', 'Gates']);

function h({firstname, lastname}){
    console.log(`hello ${firstname} ${lastname} !`);
}
h({firstname: 'Mark', lastname: 'Zuckerberg'});