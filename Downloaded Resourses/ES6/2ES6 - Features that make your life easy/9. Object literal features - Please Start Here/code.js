//object literal features

//method definition
const phone = {
    ring(i){
        console.log("beep ".repeat(i));
    }
};
phone.ring(2);

//computed property keys
const x = 'make';
function g(){
    return 'ring';
}
const phone2 = {
    [x]: 'Samsung',
    [g()](i){
        console.log("beep ".repeat(i));
    }
};
console.log(phone2);
phone2.ring(4);

//new Object methods: assign
Object.assign(phone2, {warranty: 24});
console.log(phone2);

