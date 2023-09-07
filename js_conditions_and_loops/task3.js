/* Генерація таблиці множення: 
1. Використовуючи цикл for
2. Використовуючи цикл while
*/

//Цикл for:
console.log("Using the for method:")
let number = 9;

for (let i=1; i<11; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}

//Цикл while:
console.log("Using the while method:")
let count = 1;

while (count < 11) {
    const result = number * count;
    console.log(`${number} x ${count} = ${result}`);
    count++;
}
