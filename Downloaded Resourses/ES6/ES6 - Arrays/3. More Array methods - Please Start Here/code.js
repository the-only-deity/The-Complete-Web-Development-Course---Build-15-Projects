const x = [5, 7, , 2];

//find the first element greater than 6
console.log(x.find(value => value > 6));
console.log(x.findIndex(value => value > 6));

//find the first element which if added to its index, the sum is smaller than 5
console.log(x.find((value, index) => value + index < 6));

//get the index of a value
console.log(x.indexOf(7));

//check if a value exists
console.log(x.includes(2));

//copy in position 1 the chunk between 0 and 1
console.log(x);
x.copyWithin(1, 0, 2);
console.log(x);
//copy in position 2 the chunk between 1 and the end
x.copyWithin(2, 1);
console.log(x);
//copy in position 3 the first value of the array
x.copyWithin(3);
console.log(x);


//fill x with 4's from position 1 to 1
x.fill(4, 1, 2);
console.log(x);

//fill x with {name:'Mark'} from position 2 to the end
//const y = {name:'Mark'};
x.fill({name:'Mark'}, 2);
console.log(x);
//check if values x[2] and x[3] are equal
console.log(x[2] === x[3]);//true because you are passing a reference only
console.log({name:'Mark'} === {name:'Mark'});

