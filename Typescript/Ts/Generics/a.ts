// type input=number|string

// function a(arr:input[]){
//     return arr[0]
// }

// const value=a(["Rudra","Sankha",1]);
// console.log(value.toUpperCase())

//<T> means of type anything

function getFirstElement<T>(arr:T[]){
    return arr[0]
}

interface User{
    name:string;
}

const value=getFirstElement<String>(["Rudra","Sankha"]);
const value1=getFirstElement([1,2]);
const value2=getFirstElement([true,false]);
const value3=getFirstElement([true,false,1]);
const value4=getFirstElement<User>([{name:"Rudra"}]);


console.log(value.toUpperCase());  
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);

//outputs:--
// RUDRA
// 1
// true
// true
// { name: 'Rudra' }

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

output1.toUpperCase();