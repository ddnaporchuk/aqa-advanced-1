const Book = require('./task1.js');

class EBook extends Book {
    constructor(title, author, dateOfPublication, fileFormat){
        super(title, author, dateOfPublication);
        this.fileFormat = fileFormat;
    }
    printInfo (){
        super.printInfo();
        console.log(`Format file: ${this.fileFormat}`);
    }
    get format(){
        return this.fileFormat;
    }
    set format(newFormat) {
        if (typeof newFormat === "string"){
            this.fileFormat = newFormat;
        } else {
            console.log("Format file must be a string")
        }
    }
    static createEBookFromBook(book, fileFormat){
        const title = book.title;
        const author = book.author;
        const year = book.year;
        return new EBook(book.title, book.author, book.dateOfPublication, fileFormat);
    }
}


module.exports = EBook;