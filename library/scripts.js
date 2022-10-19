let myLibrary = [];
let form = document.querySelector('#popupForm');
let submitButton = document.querySelector('#submitBtn');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let title = document.querySelector('#title');
let readStatus = document.querySelector('#status');

function openForm() {
    form.style.display = "block";
}
  
function closeForm() {
    form.style.display = "none";
}

function book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        return `The ${title} by ${author}, ${pages}, ${read}`; 
        }
}

function addBookToLibrary(book){
    myLibrary.push(book);

}

function refreshGrid(){

}

const hobbit = new book('The Hobbit','J.RR. Tolkien', '255 pages', 'not read yet');
const book1 = new book('Book1','Me', '100', 'read');
const book2 = new book('Book2','Me', '100', 'read');
const book3 = new book('Book3','Me', '100', 'not read yet');


addBookToLibrary(hobbit);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

submitButton.addEventListener('click',()=>{
    let newBook = new book(title.value,author.value,pages.value,'read');
    addBookToLibrary(newBook);
    //refershGrid();
    closeForm();
});