async function getAnimalData(){
    const response=await fetch('https://fakerapi.it/api/v1/persons');
    const final=await response.json();
   
    document.getElementById('container').innerHTML=JSON.stringify(final.data);
}