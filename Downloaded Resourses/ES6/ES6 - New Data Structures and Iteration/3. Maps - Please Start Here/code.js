const CAR = {
    make: 'Toyota',
    model: 'Yaris'
};

for (key in CAR){
    console.log(key);//order not guaranteed
}

console.log(typeof CAR.forEach);//undefined



//Example 1
//let myMap = new Map([[1,2],[3,4]]);
//console.log(myMap);
////type
//console.log(typeof myMap);//object
//console.log(myMap.delete(1));//return true if successful
//console.log(myMap);
//myMap.clear();
//console.log(myMap);


//Example 2
const [x, y, z] = [1, NaN, 3];
const LANGUAGE = {
    name: 'JavaScript',
    version: 'ES6'
};
const add = (x, y) => x + y;
const str1 = "build interactive websites";
const str2 = "NaN is not equal to itself, but this changes when it comes to Maps";
const arr = [2, 3];


let myMap = new Map();
console.log(myMap);

//set key values
myMap.set(x, z);
console.log(myMap);
myMap.set(LANGUAGE, str1);
console.log(myMap);
myMap.set(add, arr);
console.log(myMap);
myMap.set(y, str2);
console.log(myMap);

//get values/check if they exist
console.log(myMap.get(x));
console.log(myMap.has(1));
console.log(myMap.get(LANGUAGE));
console.log(myMap.has({
    name: 'JavaScript',
    version: 'ES6'
}));//objects are not equal

console.log(myMap.get(y));
console.log(myMap.get(NaN));
console.log(y === NaN);//NaN is not equal to itself but this changes when it comes to Maps.

//iteration with for of
for (const [key, value] of myMap){
    console.log(`Key: ${key} -> Value: ${value}`);
}

//forEach
myMap.forEach((key, value) => {
    console.log(`Key: ${key} -> Value: ${value}`);
});

//iterator

//const k = myMap.entries();
const k = myMap.keys();
//const k = myMap.values();
console.log(k);
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());





