//Обчислення об'єму циліндра:

const height = 17;
const radius = 45;

let volume = Math.PI * Math.pow(radius, 2) * height;
volume = volume.toFixed(2);

console.log(`Об'єм циліндра дорівнює: ${volume}`);
