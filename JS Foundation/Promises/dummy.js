function kiratAssyncfunction() {
    return new Promise(function(resolve) {
      resolve("hi there");
    });
   
  }
  
  
    const value = kiratAssyncfunction();
    value.then(function(data) {
      console.log(data);
    });
  
  