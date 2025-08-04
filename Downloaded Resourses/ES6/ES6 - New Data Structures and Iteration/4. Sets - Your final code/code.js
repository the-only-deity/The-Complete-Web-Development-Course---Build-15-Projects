//a set is an object storing a collection of unique values
let mySet = new Set();
mySet.add('John');
mySet.add(1);
mySet.add(1);
const phone = {
    make: 'Samsung',
    model: 'S8'
};
mySet.add(phone);
mySet.add(document.body);
console.log(mySet);

////pass an iterable object to the set constuctor
let mySet2 = new Set(['hi', 1, 1, 'John']);
console.log(mySet2);
let mySet3 = new Set('hello');
console.log(mySet3);

//similar methods to Maps
console.log(mySet.has(phone));
console.log(mySet.has({
    make: 'Samsung',
    model: 'S8'
}));
console.log(mySet.size);
//mySet.delete(1);
//console.log(mySet);
//mySet.clear();
//console.log(mySet);

//for of loop
for(const value of mySet){
    console.log(value);
}

for(const [key, value] of mySet.entries()){
    console.log(key, value);
}
for(const key of mySet.keys()){
    console.log(key);
}
for(const value of mySet.values()){
    console.log(value);
}

//iteration with forEach
mySet.forEach((value) => {
    console.log(value);
});


//from

//...
const myArray = [...mySet];
console.log(myArray);


//Challenge: intersection and difference
//mySet
//mySet2
//intSet
//diffSet
console.log([1,2,3].filter((item) => item > 2));
console.log(mySet);
console.log(mySet2);

//intersection
const intArray = [...mySet].filter((item) => mySet2.has(item));
console.log(intArray);
const intSet = new Set(intArray);
console.log(intSet);

//difference
const diffArray = [...mySet].filter((item) => !mySet2.has(item));
console.log(diffArray);

const diffArray2 = [...mySet2].filter((item) => !mySet.has(item));
console.log(diffArray2);

const difftSet = new Set(diffArray.concat(diffArray2));
console.log(difftSet);



