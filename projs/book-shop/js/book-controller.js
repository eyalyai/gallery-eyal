'use strict'

function onInit() {
    renderBooks();
}

function renderBooks() {
    var books = getBooks()
    var strHtmls = books.map(function(book) {
        return `
        <tr>
            <td>${book.id}</td>
            <td>${book.name}</td>
            <td class="book-price">${book.price}</td>
            <td ><img class="book-img" src="${book.imgUrl}"></td>
            <td class="act-btn">
                <button onclick="onReadBook('${book.id}')" style="background-color:royalblue ;">Read</button>
                <button onclick="onUpdateBook('${book.id}')" style="background-color: palegoldenrod ;">Update</button>
                <button onclick="onRemoveBook('${book.id}')" style="background-color:brown;">Delete</button>
            </td>
        </tr>
        `
    })
    document.querySelector('.book-tbl').innerHTML = strHtmls.join('')
}

function renderModal(book) {
    var strHtmls = `
        <img src="${book.image}" alt="">
        <h2>${book.name}</h2>
        <p>${book.author}<p>
        <p>${book.description}</p>
        <h3>${book.price}</h3>
        <button onclick="onCloseModal()">Close</button>`
    var elModal = document.querySelector('.book-modal');
    elModal.innerHTML = strHtmls;
    elModal.classList.remove('hidden');
}

function onReadBook(bookId) {
    var book = getBooks(bookId);
    renderModal(book);
}

function onCloseModal() {
    var elModal = document.querySelector('.book-modal');
    elModal.classList.add('hidden');
}

function onRemoveBook(bookId) {
    removeBook(bookId);
    renderBooks();
}

function onUpdateBook(bookId) {

    var elUpdatePrice = document.querySelector('.book-price');
    elUpdatePrice.innerHTML = `
    <section>
    <input type="number" />
    <button class="update-price-btn" onclick="onPriceUpdate('${bookId}')">submit</button>
    </section>
    `

}

function onPriceUpdate(bookId) {
    updateBook() // value

}