import {DefaultService} from "./generated"

async function main(){
const res=await DefaultService.getUser("123123");
console.log(res);
}

main();

