type Employee1={
    name:String;
    startDate:Date;
}

interface Manager1{
    name:String,
    department:String;
}

type TeamLead=Employee1 & Manager1;

const teamLead={
name:"Harkirat",
startDate:new Date(),
department:'Web Dev'
}