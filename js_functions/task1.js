
function calculateArea(width, height) {
    return width * height;
}

console.log(`This is declaration function: ${calculateArea(8, 4)}`); // This is the result of the function: 32;

const calculateArea2 = function (width, height) {
    return width * height;
}

console.log(`This is expression function: ${calculateArea2(12, 7)}`); // This is the result of the function: 84; 

const calculateArea3 = (width, height) => width * height;
console.log(`This is arrow function: ${calculateArea3(7, 18)}`); // This is the result of the function: 126;
