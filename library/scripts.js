let myLibrary = [];
let grid = document.querySelector('#grid');
let form = document.querySelector('#popupForm');
let submitButton = document.querySelector('#submitBtn');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let title = document.querySelector('#title');

function openForm() {
    form.style.display = "block";
}
  
function closeForm() {
    form.style.display = "none";
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

function populateGrid(){
    grid.innerHTML = ""; //make grid empty for the for loop

    for(let i = 0; i<myLibrary.length;i++){
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
        removeButton.dataset.index = i;
        removeButton.classList.add('deleteBtn');

        cardTitle.textContent = myLibrary[i].title;
        cardAuthor.textContent = myLibrary[i].author;
        cardPages.textContent = myLibrary[i].pages;
    
        newCard.appendChild(cardTitle);
        newCard.appendChild(cardAuthor);
        newCard.appendChild(cardPages);
        newCard.appendChild(formatDiv);
        newCard.appendChild(removeButton);

        newCard.classList.add('cards');
    
        grid.appendChild(newCard);

        removeButton.addEventListener('click', () =>{
            console.log(removeButton.dataset.index);
            myLibrary.splice(removeButton.dataset.index,1);
            populateGrid();
        });
    }
}

submitButton.addEventListener('click',()=>{
    let newBook = new book(title.value,author.value,pages.value,myLibrary.length);
    myLibrary.push(newBook);
    closeForm();
    populateGrid();
});
