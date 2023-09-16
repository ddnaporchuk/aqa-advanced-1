function checkAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const isAdult = 25;
const isYoung = 15;

const result1 = checkAdult(isAdult);
const result2 = checkAdult(isYoung);

console.log(`Вік ${isAdult} - дорослий: ${result1}`);
console.log(`Вік ${isYoung} - дорослий: ${result2}`);