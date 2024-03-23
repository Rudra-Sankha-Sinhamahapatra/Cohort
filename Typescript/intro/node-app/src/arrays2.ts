interface User1000 {
    firstName: String;
    lastName: String;
    age: number;
}

function filterUsers(users: User1000[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filterUsers([
    {
        firstName: "harkirat",
        lastName: "Singh",
        age: 21
    },
    {
        firstName: "Raman",
        lastName: "Singh",
        age: 16
    }
]));
