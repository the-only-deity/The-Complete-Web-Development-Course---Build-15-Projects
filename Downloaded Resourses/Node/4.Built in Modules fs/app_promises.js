//Use the fs module the asynchronous way through callback functions.
const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';
const jupiter = 'jupiter.txt';


//JS code in this case is unblocking, meaning JS can move to the next line while an fs operation is waiting for the callback to be executed.



//check if a file exists: method 1
fs.stat(mars, err => {
    if(err){
        console.log(err);
    }else{
        console.log(`${mars} exists!`)
    }
});

//change the permissions of mars.txt to: 0444
fs.chmod(mars, 0777, err => {
    if(err){
        console.log(`Error:
${err}`);
    }
});
//check if a file exists: method 2
fs.access(mars, fs.constants.W_OK, err => {
    if(err){
        console.log(`Error:
${err}`);
    }

});


//read/write/append:


//Using Promises
//readFile
//console.log
//appendFile
//readFile
//console.log
//catch statement
fs.promises.writeFile(jupiter, 'I am learning Node!')
.then(() => fs.promises.readFile(jupiter, 'utf-8'))
.then(
    data => {console.log(`${jupiter} content: 
                ${data}`);})
.then(() => {fs.promises.appendFile(jupiter, '\nIt is so fun!')})
.then(() => fs.promises.readFile("nothere.txt", 'utf-8'))
.then(data => {console.log(`${jupiter} content: 
                ${data}`);})
.catch(err => {console.log(`Error:
${err}`);});


console.log('hello');
