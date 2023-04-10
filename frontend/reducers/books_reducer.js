import { RECEIVE_BOOKS, RECEIVE_BOOK, REMOVE_BOOK } from '../actions/book_actions';

const booksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BOOKS:
            return action.books;
        case RECEIVE_BOOK:
            newState[action.book.id] = action.book;
            return newState;
        case REMOVE_BOOK:
            delete newState[action.bookId];
            return newState;
        default:
            return state;
    }
};

export default booksReducer;
