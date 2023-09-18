const numbersList = [1,10,14,2,4,5,43,34];

const copiedNumbers = [].concat(numbersList);

copiedNumbers.sort((a, b) => a - b);

console.log("Вихідний масив:", numbersList);
console.log("Скопійований та відсортований масив:", copiedNumbers);