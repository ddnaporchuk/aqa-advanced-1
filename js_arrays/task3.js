const numbers = [10, 20, 30, 40, 50];

const sumNumbers = numbers.reduce((accamulator, currentValue) => {
    accamulator += currentValue
    return accamulator;
}, 0);

console.log("Сума всіх елементів масиву:", sumNumbers); // 150;