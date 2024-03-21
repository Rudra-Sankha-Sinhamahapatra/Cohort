interface person{
    name:string,
    age?:number,
    greet(phrase:string):void;
}

class Employee  implements person{
    name:string;
    age?:number;

    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }

    greet(phrase:string):void{
        console.log(`${phrase} ${this.name}`);
    }
}

const emp=new Employee('Rudra',20);

emp.greet('Hello I am');