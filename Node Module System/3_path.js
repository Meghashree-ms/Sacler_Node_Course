
// Import the built-in 'path' module
// No npm install is required
const path = require('path');


// --------------------------------------------------
// 1. path.join()
// --------------------------------------------------
// Used to join multiple folder/file names into one path.
// It automatically handles / or \ depending on the OS.

const filePath = path.join('users', 'megha', 'documents', 'resume.pdf');

console.log('Joined Path:', filePath);


// --------------------------------------------------
// 2. path.basename()
// --------------------------------------------------
// Returns only the file name from a path.

const fileName = path.basename(filePath);

console.log('File Name:', fileName);


// --------------------------------------------------
// 3. path.dirname()
// --------------------------------------------------
// Returns the folder/directory part of the path.

const folderPath = path.dirname(filePath);

console.log('Folder Path:', folderPath);


// --------------------------------------------------
// 4. path.extname()
// --------------------------------------------------
// Returns the extension of the file.

const extension = path.extname(filePath);

console.log('File Extension:', extension);


// --------------------------------------------------
// 5. path.parse()
// --------------------------------------------------
// Breaks a complete path into different parts.

const parsedPath = path.parse(filePath);

console.log('Parsed Path:', parsedPath);


// --------------------------------------------------
// 6. path.resolve()
// --------------------------------------------------
// Creates an absolute path from the given path.

const absolutePath = path.resolve('uploads', 'image.jpg');

console.log('Absolute Path:', absolutePath);


// --------------------------------------------------
// 7. path.isAbsolute()
// --------------------------------------------------
// Checks whether a path is an absolute path.
// Returns true or false.

console.log('Is Absolute:', path.isAbsolute(absolutePath));


// --------------------------------------------------
// REAL-WORLD EXAMPLE
// --------------------------------------------------
// Suppose a user uploads a file.
// We want to create its path inside an 'uploads' folder.

const uploadFolder = path.join(__dirname, 'uploads');

const uploadedFile = path.join(uploadFolder, 'profile.jpg');

console.log('Upload Folder:', uploadFolder);
console.log('Uploaded File:', uploadedFile);


// --------------------------------------------------
// QUICK SUMMARY
// --------------------------------------------------
//
// path.join()       -> Joins path parts
// path.basename()  -> Gets file name
// path.dirname()   -> Gets folder path
// path.extname()   -> Gets file extension
// path.parse()     -> Breaks path into parts
// path.resolve()   -> Creates absolute path
// path.isAbsolute()-> Checks if path is absolute
//
// --------------------------------------------------
