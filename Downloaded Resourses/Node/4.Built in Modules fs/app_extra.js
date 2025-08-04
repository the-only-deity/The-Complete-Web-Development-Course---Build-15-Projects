const fs = require('fs');
const mars = 'mars.txt';
const venus = 'venus.txt';
const jupiter = 'jupiter.txt';
//more fs methods


//delete a file
//fs.unlink("file.txt", err => {
//    if(err){
//        console.log(`Error: ${err}`)
//    }else{
//        console.log("file.txt has been deleted!")
//    }
//});

//copy a file
fs.copyFile(jupiter, 'jupiter_copy.txt', fs.constants.COPYFILE_EXCL, err => {
    if(err){
        console.log(`Error: ${err}`)
    }else{
        console.log(`${jupiter} has been copied successfully!`);
    }});

//create, remove a directory
//fs.mkdir("App/Styling", {recursive: true}, err => {
//    if(err){
//        console.log(`Error: ${err}`)
//    }else{
//        console.log(`App/Styling has been created successfully!`);
//    }});

fs.rmdir("CSS", err => {
    if(err){
        console.log(`Error: ${err}`)
    }else{
        console.log(`CSS has been removed successfully!`);
    }});