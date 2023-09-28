class Book {
    constructor(title, author, dateOfPublication){
        this._title = title;
        this._author = author;
        this._dateOfPublication = dateOfPublication;
    }

    printInfo(){
        console.log(`Title: ${this.title}`)
        console.log(`Author: ${this.author}`)
        console.log(`Year of publication: ${this.dateOfPublication}`)
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
        }
    
        return [...books].sort((a, b) => a.dateOfPublication - b.dateOfPublication)[0];
    };
}

module.exports = Book;