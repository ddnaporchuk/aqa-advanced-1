const Book = require('./task1.js');
const EBook = require('./task2.js');

console.log("Book number 1:")
const book1 = new Book("Atlas Shrugged", "Ayn Rand", 1957); // Створюємо інстанси класу Book
book1.printInfo();
console.log("-------------------------------------------------")

console.log("Book number 2:")
const book2 = new Book("Nineteen Eighty-Four", "George Orwell", 1949); // Створюємо інстанси класу Book
book2.printInfo();
console.log("-------------------------------------------------")

console.log("EBook info:")
const ebook = new EBook("Moby-Dick", "Herman Melville", 1851, 'PDF'); // Створюємо інстанс класу EBook
ebook.printInfo();
console.log("-------------------------------------------------")

const books = [book1, book2, ebook];

console.log("The oldest book:");
const oldestBook = Book.getOldestBook(books); // Знаходимо найдавнішу книгу
oldestBook.printInfo();
console.log("-------------------------------------------------")

console.log("Create an Ebook from a book:")
const newEbook = EBook.createEBookFromBook(book1, "PDF"); // Створюємо EBook з існуючого об'єкту Book
newEbook.printInfo();