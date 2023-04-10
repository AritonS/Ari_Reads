import { RECEIVE_BOOKS, RECEIVE_BOOK, REMOVE_BOOK } from '../actions/book_actions';

const booksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BOOKS:
            return action.books;
        case RECEIVE_BOOK:
            nextState[action.book.id] = action.book;
            return nextState;
        case REMOVE_BOOK:
            delete nextState[action.bookId];
            return nextState;
        default:
            return state;
    }
};

export default booksReducer;
