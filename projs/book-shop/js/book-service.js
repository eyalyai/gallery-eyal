'use strict'

const KEY = 'books';
var gBooks = [{
        id: makeId(),
        name: 'The Lord of the Rings by JJR',
        price: getRandomIntInclusive(1, 30),
        imgUrl: 'https://tinyurl.com/w8ew8ay'
    },
    {
        id: makeId(),
        name: 'The Book - by Alan Watts',
        price: getRandomIntInclusive(1, 30),
        imgUrl: 'https://tinyurl.com/jjzcevff'
    },
    {
        id: makeId(),
        name: 'The Bible - by GOD',
        price: getRandomIntInclusive(1, 30),
        imgUrl: 'https://tinyurl.com/2s4f8ahv'
    },
    {
        id: makeId(),
        name: 'The doors of perception - by Aldous Huxley',
        price: getRandomIntInclusive(1, 30),
        imgUrl: 'https://tinyurl.com/ah22jv3s'
    }
];




// function _createBooks() {
//     var books = loadFromStorage(KEY);
//     if (!books || !books.length) {

//         books.forEach(function(book) {
//             book = _createBook(bookNames, bookImgs);
//         })
//     }
//     gBooks = books;
//     _saveBooksToStorage();
// }

function addBook() { //
    var book = _createBook();
    gBooks.push(book);
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks);
}

function getBooks() {
    return gBooks;
}

function removeBook(bookId) {
    var book = findBook(bookId); //return book.id
    gBooks.splice(idx, 1);
    _saveBooksToStorage();
}

function updateBook(bookId, bookPrice) { //change price
    var idx = findBook(bookId);
    console.log(idx);
    gBooks[idx].price = bookPrice;
    _saveBooksToStorage();

}

function readBook(bookId) {

}

function findBookIdx(bookId) {
    return gBooks.findIndex(function(book) {
        return bookId === book.id;
    })
}