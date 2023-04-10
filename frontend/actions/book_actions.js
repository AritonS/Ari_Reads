import * as BookApiUtil from '../util/book_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const receiveBooks = books => ({
    type: RECEIVE_BOOKS,
    books
});

export const receiveBook = book => ({
    type: RECEIVE_BOOK,
    book
});

export const removeBook = bookId => ({
    type: REMOVE_BOOK,
    bookId
});

export const fetchBooks = (userId, listId) => dispatch => (
    BookApiUtil.fetchBooks(userId, listId).then(books =>
        dispatch(receiveBooks(books))
    )
);

export const fetchBook = (userId, listId, bookId) => dispatch => (
    BookApiUtil.fetchBook(userId, listId, bookId).then(book =>
        dispatch(receiveBook(book))
    )
);

export const createBook = (userId, listId, book) => dispatch => (
    BookApiUtil.createBook(userId, listId, book).then(book =>
        dispatch(receiveBook(book))
    )
);

export const updateBook = (userId, listId, book) => dispatch => (
    BookApiUtil.updateBook(userId, listId, book).then(book =>
        dispatch(receiveBook(book))
    )
);

export const deleteBook = (userId, listId, bookId) => dispatch => (
    BookApiUtil.deleteBook(userId, listId, bookId).then(() =>
        dispatch(removeBook(bookId))
    )
);
