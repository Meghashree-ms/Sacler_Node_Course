const figlet = require('figlet');
// to use a np package 
//callback function is passed with data ..data is hello world 
figlet("Hello Megha!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});