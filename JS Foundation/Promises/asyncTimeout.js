function kiratsAsyncFunction() {

    let p= new Promise(function(resolve) {
  
      // do some async logic here
  
setTimeout(function() {
  resolve("hi there!")
  }, 3000);
  
    });
  
    return p;
  
  }
  
  async function main() {
  
    // no callhacks, ne then sylitax
  
    //ktratsAsyncFunction().then(function(value) {
  
    // console.logivalue);
  
    let value= await kiratsAsyncFunction();
  //hi there1 will be printed after 3 seconds of printing after main 
    console.log("hi there1");
  
  }
  
  main();
  
  console.log("after main");
  