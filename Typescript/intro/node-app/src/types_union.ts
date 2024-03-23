type StringorNumber=string | number;

function printId(id:StringorNumber){
    console.log(`${id}`);
}

printId('one');
printId(1);