const person = {
    firstName: "John",
    lastName: "James",
    age: 19
}

person.email = "test@test.com";
delete person.age;

console.log(person);
