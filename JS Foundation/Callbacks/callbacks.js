const fs = require('fs');
const path = require('path');

const filenamePath = process.argv[1]; // Assuming the script is executed directly
const dirname = path.dirname(filenamePath);

const filePath = path.join(dirname, 'a.txt');

// my own asynchronous function
function kiratsReadFile(cb) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    cb(data);
  });
}

// callback function to call
function onDone(data) {
  console.log(data);
}

kiratsReadFile(onDone);
