let p=new Promise(function(resolve){
    resolve("hii there");
})

p.then(function () {
    console.log(p);
  })