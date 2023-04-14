import * as BookApiUtil from '../utils/book_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

const receiveBooks = books => {
    return {
        type: RECEIVE_BOOKS,
        books
    }
}

const receiveBook = book => {
    return {
        type: RECEIVE_BOOK,
        book
    }
}

const removeBook = bookId => {
    return {
        type: REMOVE_BOOK,
        bookId
    }
}

export const fetchBooks = listId => dispatch => {
    return BookApiUtil.fetchBooks(listId)
        .then(books => dispatch(receiveBooks(books)))
}

export const fetchBook = (listId, bookId) => dispatch => {
    return BookApiUtil.fetchBook(listId, bookId)
        .then(book => dispatch(receiveBook(book)))
}

export const createBook = (listId, book) => dispatch => {
    return BookApiUtil.createBook(listId, book)
        .then(createdBook => dispatch(receiveBook(createdBook)))
}

export const updateBook = (listId, book) => dispatch => {
    return BookApiUtil.updateBook(listId, book)
        .then(updatedBook => dispatch(receiveBook(updatedBook)))
}

export const deleteBook = (listId, bookId) => dispatch => {
    return BookApiUtil.deleteBook(listId, bookId)
        .then(() => dispatch(removeBook(bookId)))
}