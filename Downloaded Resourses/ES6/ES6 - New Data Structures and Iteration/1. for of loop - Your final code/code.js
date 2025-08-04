//traditional for
for(let i = 0; i < 3; i ++){
    console.log(i);
}

for(let i = 0; i < 3; i ++){
    if(i == 1) break;
    console.log(i);
}

//forEach
const CARMAKES = ['Audi', 'BMW', 'Ford'];
CARMAKES.forEach((element, index) => {
    console.log(`Make ${index + 1}: ${element}`);
});

//ES6 for of:
for (const x of CARMAKES){
//    if(x == "BMW") break;
    console.log(x);
}