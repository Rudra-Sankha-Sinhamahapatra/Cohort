function findSum(n){
let ans=0;
for(let i=0;i<n;i++){
    ans+=i;
}
return ans;
}

function findTill100(){
    console.log(findSum(100));
}

setTimeout(findTill100,1000);
console.log("Hello World");