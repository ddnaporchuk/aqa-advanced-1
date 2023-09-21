
const users = [
    {
        name: "John",
        email: "test@test.com",
        age: 19
    },
    {
        name: "Den",
        email: "test@example.com",
        age: 24
    },
    {
        name: "Anton",
        email: "test@example.com",
        age: 21
    }
]

for (const user of users) {
    let {name, email, age} = user;
    console.log(`${name} is ${age} years old, and ${name} has an email: ${email}`)
}