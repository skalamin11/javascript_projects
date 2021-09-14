//dom selection
let bookTitle = document.querySelector("#book-title");
let author = document.querySelector("#author");
let year = document.querySelector("#year");
let submitBtn = document.querySelector("#submit-btn");
let bookList = document.querySelector("#book-list");

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    
    if (bookTitle.value == '' || author.value == '' || year.value == '') {
        alert('Please input your information.');
    } else {

    let newRow = document.createElement("tr");

    let newTitle = document.createElement("td");
    newTitle.innerHTML = bookTitle.value;
    newRow.appendChild(newTitle);

    let newAuthor = document.createElement("td");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    let newYear = document.createElement("td");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow);
    }

})