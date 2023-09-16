function check(age) {
    if (age >= 18){
        console.log("This person is adult!");
        return
    }
    console.log("This person isn't yet an adult. Go home!")
}

check(25); // This person is adult!

check(15); // This person isn't yet an adult. Go home!