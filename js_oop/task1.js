class Book {
    constructor(_title, _author, _dateOfPublication){
        this._title = _title;
        this._author = _author;
        this._dateOfPublication = _dateOfPublication;
    }

    printInfo(){
        console.log(`Title: ${this._title}`)
        console.log(`Author: ${this._author}`)
        console.log(`Year of publication: ${this._dateOfPublication}`)
    } 

    get title(){
        return this._title;
    }
    set title(newTitle){
        if(typeof newTitle === "string"){
            this._title = newTitle;
        }else{
            console.error("Error: Title must be a string");
        }
    };
    get author(){
        return this._author;
    };
    set author(newAuthor){
        if(typeof newAuthor === "string"){
            this._author = newAuthor;
        } else {
            console.error("Error: Author must be a string")
        }
    };
    get dateOfPublication(){
        return this._dateOfPublication;
    };
    set dateOfPublication(newYear){
        if(typeof newYear === "number" && newYear >= 0){
            this._dateOfPublication = newYear;
        } else {
            console.err("Error: The year of publication must be greater than 0 or equal to zero")
        }
    };

    static getOldestBook(books){
        if(books.length === 0){
            return null;
        };
    
    
        let oldestBook = books[0];
        for (let i = 1; i < books.length; i++) {
            if (books[i]._dateOfPublication < oldestBook._dateOfPublication) {
                oldestBook = books[i];
            }
        }
        return oldestBook;
    };
}

module.exports = Book;