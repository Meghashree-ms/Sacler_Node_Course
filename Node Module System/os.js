const os = require('os');


console.log(os.arch());//archtecture
console.log(os.platform());//platform
console.log(os.networkInterfaces());    
// console.log(os.cpus());//cpu info
console.log(os.totalmem()); //total memory
console.log(os.freemem());//memory left

//application of above , few games require config , they check if applications have proper config