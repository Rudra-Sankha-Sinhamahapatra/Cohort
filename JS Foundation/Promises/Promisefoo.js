//=>pending,resolve

var d=new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo");
    },4000);
});

function callBack(){
console.log(d);
}
d.then(callBack);