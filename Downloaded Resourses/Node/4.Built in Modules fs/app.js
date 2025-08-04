//you can use the built in file system module in Node.js to manage files and folders: read/write/etc.
const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';
const jupiter = 'jupiter.txt';

//synchronous way: the following code is blocking, JS does not move to the next line until the current line is executed

//check if mars exists:
console.log(fs.existsSync(mars));
//read mars
try{
    let data = fs.readFileSync(mars, 'utf-8');
    console.log(`
${mars} content:
${data}
`);
}catch(err){
    console.log(`error:
${err}`);
}

//create jupiter or override content:
try{
    fs.writeFileSync(jupiter, 'Jupiter has the shortest day of all planets.');
}catch(err){
    console.log(`error:
${err}`);
}
//read jupiter
try{
    data = fs.readFileSync(jupiter, 'utf-8');
    console.log(`
${jupiter} content:
${data}
`);
}catch(err){
    console.log(`error:
${err}`);
}

//override content of venus:
try{
    fs.writeFileSync(venus, 'this is some text');
}catch(err){
    console.log(`error:
${err}`);
}

//read venus
try{
    data = fs.readFileSync(venus, 'utf-8');
    console.log(`
${venus} content:
${data}
`);
}catch(err){
    console.log(`error:
${err}`);
}


//append content to jupiter
try{
    fs.appendFileSync(jupiter, '\nsome text.');
}catch(err){
    console.log(`error:
${err}`);
}


//read jupiter
try{
    data = fs.readFileSync(jupiter, 'utf-8');
    console.log(`
${jupiter} content:
${data}
`);
}catch(err){
    console.log(`error:
${err}`);
}


console.log('hello');


