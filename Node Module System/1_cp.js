//child process is a node modules used to create sub preocess within a script 
// you can use it to perform tasks in parallel by just using methods like fork() and spawn()

const cp = require('child_process'); // to import a module we need require
//execSync execute a command synchronously

// cp.execSync('calc'); // open calculator from laptop application

// cp.execSync('start chrome'); // open chrome browser from laptop application

// cp.execSync('start chrome https://www.scaler.com');


//can execute differet file in cp 
console.log('output' + cp.execSync('node demo.js'));