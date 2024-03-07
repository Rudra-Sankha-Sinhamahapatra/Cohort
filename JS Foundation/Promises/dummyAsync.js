function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      resolve("hi there!")
    });
    return p;
  }
  
  async function main() {
    //no callbacks,more cleaner syntax
    const value = await kiratsAsyncFunction();
    console.log(value);
    //.then await does the same
  }
  
  main();
  