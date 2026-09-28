//reading a file 
const fs = require('fs');
let fileContent = fs.readFileSync('f1.txt', 'utf-8'); // readFileSync is a method to read a file synchronously
// if the file name does not exist , a new file will be created and data will be written in that file

console.log('data of file 1' + fileContent);

//writig a file 
fs.writeFileSync('f2.txt','This file wrrittenn');
console.log('File has been updated');

//update a file 
//append data adds new  data to previously written file
fs.appendFileSync('f2.txt','this is most recent data');
console.log('appended file')

//delete file 
// fs.unlinkSync('f3.txt');
// console.log('file has been deleted');


//Directories

//create directory 
// fs.mkdirSync('myDir');
// console.log('Directory created');
// to check the content inside of a directory, always pass double slash to able to read exact path
let dirContent = fs.readdirSync('D:\\The node course\\Node Module System\\myDir');
console.log('Content of myDir:', dirContent);

//to check if directory exists
if (fs.existsSync('D:\\The node course\\Node Module System\\myDir')) {
    console.log('Directory exists');
} else {
    console.log('Directory does not exist');
}

// to delete a directory
// fs.rmdirSync('myDir');
// console.log('Directory deleted');
