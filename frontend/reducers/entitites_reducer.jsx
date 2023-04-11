import { combineReducers } from "redux";
import booksReducer from "./books_reducer";
import listsReducer from "./lists_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    lists: listsReducer,
    books: booksReducer
});

export default entitiesReducer;