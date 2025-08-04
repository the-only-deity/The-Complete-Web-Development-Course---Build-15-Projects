const BASKET = ['strawberry', 'apple', 'yogurt', 'bread'];


//iteration
for(const x of BASKET){
    console.log(x);
}

//BASKET is iterable

//an iterator
//next() -> {value: , done: }

//built in method creating an iterator out of an array
//let arrIt = BASKET.entries();
const arrIt = BASKET.values();
//let arrIt = BASKET.keys();
console.log(arrIt);
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));

//let's create a function that makes an iterator out of an array
const createIterator = array => {
    let index = 0;
    return {
        next(){
            if(index < array.length){
                return{
                    value: array[index++],
                    done: false
                }
            }else{
                return {
                    done: true
                }
            }
        } 
    };
};

const arrIt2 = createIterator([1,2,3]);
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());


//generator functions: factory of iterators

function* genIterator(){
    console.log('running');
    yield 1; //pause generator
    console.log('running');
    yield 2;
}
const it = genIterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());


