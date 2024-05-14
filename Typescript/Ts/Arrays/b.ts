
interface User{
firstName:string,
lastName:string,
age:number
}

function filteredUsers(user:User[]){
return user.filter(x=>x.age >=18);
}

console.log(filteredUsers([
    {
    firstName:"Hii",
    lastName:"hi",
    age:18
    },{
firstName:"jim",
lastName:"ooker",
age:17
    },
]))