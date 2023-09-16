
function area1(width, height) {
    return width * height;
}

console.log(`This is declaration function: ${area1(8, 4)}`); // This is the result of the function: 32;

const area2 = function (width, height) {
    return width * height;
}

console.log(`This is expression function: ${area2(12, 7)}`); // This is the result of the function: 84; 

const area3 = (width, height) => width * height;
console.log(`This is arrow function: ${area3(7, 18)}`); // This is the result of the function: 126;
