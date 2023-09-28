const Book = require('./task1.js');

class EBook extends Book {
    constructor(_title, _author, _dateOfPublication, _fileFormat){
        super(_title, _author, _dateOfPublication);
        this._fileFormat = _fileFormat;
    }
    printInfo (){
        super.printInfo();
        console.log(`Format file: ${this._fileFormat}`);
    }
    get format(){
        return this._fileFormat;
    }
    set format(newFormat) {
        if (typeof newFormat === "string"){
            this._fileFormat = newFormat;
        } else {
            console.log("Format file must be a string")
        }
    }
    static createEBookFromBook(book, _fileFormat){
        return new EBook(book._title, book._author, book._dateOfPublication, _fileFormat);
    }
}


module.exports = EBook;