function age(age:number):boolean{
if(age<18){
    return false;
}
else{
    return true;
}
}
console.log(age(19));
console.log(age(17));