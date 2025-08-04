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
fs.writeFile(jupiter, 'I am learning Node!', err => {
    if(err){
        console.log(`Error:
${err}`);
    }else{
        //read file
        fs.readFile(jupiter, 'utf-8', (err, data) => {
            if(err){
                console.log(`Error:
                ${err}`);
            }else{
                console.log(`${jupiter} content: 
                ${data}`);
                //append content
                fs.appendFile(jupiter, '\nIt is so fun!', err => {
                    if(err){
                        console.log(`Error:
                        ${err}`);
                    }else{
                        //read file
                        fs.readFile(jupiter, 'utf-8', (err, data) => {
                            if(err){
                                console.log(`Error:
                                ${err}`);
                            }else{
                                console.log(`${jupiter} content: 
                                ${data}`);
                            }

                        });
                    }

                });
            }

        })
    }

});

console.log('hello');
