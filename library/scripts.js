let myLibrary = [];
let grid = document.querySelector('#grid');
let submitButton = document.querySelector('#submitBtn');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let title = document.querySelector('#title');
let form = document.querySelector('.popup');
let filledForm = document.querySelector('.formContainer');
let cancelButton = document.querySelector('#cancelBtn');

function showForm() {
  form.classList.add('open');
}

function hideForm() {
  form.classList.remove('open');
}

function book (title,author,pages,index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.index = index
}

function create (elemnt){
    return document.createElement(elemnt);
}

function makeCard(book){
    let newCard = create('div');
    let cardTitle = create('p');
    let cardAuthor = create('p');
    let cardPages = create('p');

    let isBookRead = create('p');
    let formatDiv = create('div');
    let cardReadStatus = create('INPUT');
    cardReadStatus.setAttribute('type', 'checkbox');
    isBookRead.textContent = "Read?";
    formatDiv.appendChild(isBookRead);
    formatDiv.appendChild(cardReadStatus);
    formatDiv.style.display = 'flex';

    let removeButton = create('button');
    removeButton.dataset.index = book.index;
    removeButton.classList.add('deleteBtn');
    removeButton.textContent = "X";

    cardTitle.textContent = "Title: " + book.title;
    cardAuthor.textContent = "Author: " + book.author;
    cardPages.textContent = "Pages: " + book.pages;

    newCard.appendChild(cardTitle);
    newCard.appendChild(cardAuthor);
    newCard.appendChild(cardPages);
    newCard.appendChild(formatDiv);
    newCard.appendChild(removeButton);

    newCard.classList.add('cards');

    grid.appendChild(newCard);

    removeButton.addEventListener('click', () =>{
        myLibrary.splice(removeButton.dataset.index,1);
        for(let i = 0;i<myLibrary.length;i++){
            myLibrary[i].index = i;
        }
        populateGrid();
    });
}

function populateGrid(){
    grid.innerHTML = ""; //make grid empty for the for loop
    if (myLibrary.length == 1 ){
        makeCard(myLibrary[0]);
    }
    else{
        for(let i = myLibrary.length;i>0;i--){
            makeCard(myLibrary[i-1]);
        }
    }
}

function clearFields(){
    title.value = "";
    author.value = "";
    pages.value = "";

}

cancelButton.addEventListener('click', ()=>{
    let isValid = filledForm.checkValidity(); 
    if (isValid == false || isValid == true){
        hideForm();
        clearFields();
    }
    
});

submitButton.addEventListener('click',()=>{
    let isValid = filledForm.checkValidity(); //check if form is filled out
    if(isValid == true){
        let newBook = new book(title.value,author.value,pages.value,myLibrary.length);
        myLibrary.push(newBook);
        hideForm();
        populateGrid();
        clearFields();
    }
});
