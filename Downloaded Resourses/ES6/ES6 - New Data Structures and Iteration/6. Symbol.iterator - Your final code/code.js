const basket = ['apple', 'blueberry', 'bread'];

//for of loop
for (const value of basket){
    console.log(value);
}

console.log(Symbol.iterator);
console.log(typeof Symbol.iterator);

console.log(basket);

console.log(basket[Symbol.iterator]());

console.log(basket.entries());

const it = basket[Symbol.iterator]();
//const it = basket.entries();
//const it = basket.keys();
//const it = basket.values();
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());

let iteration = it.next();

while(!iteration.done){
    console.log(iteration.value);
    iteration = it.next();
}

//create a custom iterator of an object
const obj = {
    *[Symbol.iterator](){
        for(let i = 1; i < 3; i ++){
            yield i;
        }
    }
}

const it2 = obj[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

//treat the obj objects as iterable
for(const x of obj){
    console.log(x);
}
console.log([...obj]);
