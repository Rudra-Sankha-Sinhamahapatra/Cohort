const fs = require('fs');
const path = require('path');

const filenamePath = process.argv[1];
const dirname = path.dirname(filenamePath);

function kiratsReadFile() {
    console.log("inside kirat's read file");
  return new Promise((resolve, reject) => {
    console.log('inside promises');
    const filePath = path.join(dirname, 'a.txt');
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log("Before resolve")
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}

var a=kiratsReadFile();
a.then(onDone).catch(error => console.error(error));
console.log(a);
