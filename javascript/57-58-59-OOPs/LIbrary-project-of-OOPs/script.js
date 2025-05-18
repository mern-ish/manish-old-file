//Library for book

class Library{
    constructor(){
        this.books = []; 
    }

    addBook(books){
        this.books.push(...books);
    }
    listAllBooks(){
        this.books.forEach(function(book){
            console.log(book)
        })
    }
}



class Book{
    constructor(name,isbn,price,author){
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.readstatus = false;
    }
    info(){
        console.log(`${this.name} is written by ${this.author} and you have ${this.readstatus?" read this":"not read this"} this book and is available at amazon at a price range of ${this.price}`);
    }
    changeReadStatus(){
        this.readstatus = !this.readstatus;
    }
}
//creating instance for library
let patnaLibrary = new Library();

//creating instance (object) of book
let book1 = new Book("Wealth is life","234hiuhrjkeh34u",140,"Robert forst");
let book2 = new Book("the art of laziness","234hiuhrjkeh34u",220,"rohit");
let book3= new Book("procrastination","234hiuhrjkeh34u",1200,"manish");

//adding book instace to library instance
patnaLibrary.addBooks([book1,book2,book3]);


