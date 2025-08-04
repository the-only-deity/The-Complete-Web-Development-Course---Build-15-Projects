const upper_first = firstname => firstname[0].toUpperCase() + firstname.substring(1); 
let firstname = process.argv[2];
firstname = upper_first(firstname);  //steve -> S + teve
let lastname = process.argv[3];
lastname = upper_first(lastname); 
console.log(`Hello ${firstname} ${lastname}!`);