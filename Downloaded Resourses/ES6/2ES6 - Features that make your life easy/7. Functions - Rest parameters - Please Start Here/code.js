//ES5
function printAll(){
    var arr = [];
    for (var i = 0; i < arguments.length; i ++){
        arr.push(arguments[i]);
    }
    return arr;
}
console.log(printAll(1, 2));

//ES6 using rest parameters
function printAll2(x, ...y){
    console.log(x);
    console.log(y);
}
printAll2(1,2,3);


//function pcheck firstname, lastname, 
//Passenger: firstname lastname
//Belongings: item1, item2, item3, ...

//ES6
function pCheck(firstname, lastname, ...items){
    const belongings = items.length>0? items : 'none';
    console.log(`Passenger: ${firstname} ${lastname}.
Belongings: ${belongings}`);
}
pCheck('Mark', 'Zuckerberg', 'Bag', 'Suitcase');

//ES5
function pCheck2(firstname, lastname){
    console.log(arguments);
    var z = Array.prototype.slice.call(arguments,2);
    var belongings = z.length > 0 ? z : 'none';
    console.log('Passenger: ' + firstname + ' ' + lastname + '\n' + 'Belongings: ' + belongings);
}
pCheck2('Bill', 'Gates', 'BackPack', 'Suitcase');