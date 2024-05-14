const user={
    firstname:"Harkirat",
    lastname:"Singh",
    age:21,
    email:`harkirat123@gmail.com`
}

interface User{
   firstname:String,
   lastname:String,
   age:number,
   email?:String
}

function greet11(user:User):void{
    console.log("\nYour email: "+(user.email as String));
}

greet11(user);

function isLegal11(user:User):boolean{
if(user.age>18){
    return true;
}
else{
    return false;
}
}

const answer=isLegal11(user);
console.log(answer);