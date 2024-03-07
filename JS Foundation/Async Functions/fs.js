import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = `${__dirname}/a.txt`;
//by fs we can read or write to a file
fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
        console.error("Error reading file:", err);
    }
    console.log("File content:", data);
});
let a=0;
for(let i=0;i<1000000000;i++){
a++;
}
console.log("hi there");
console.log(__filename);//returns the file location
console.log(__dirname)//returns the directory location
