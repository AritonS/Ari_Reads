import { combineReducers } from 'redux';
import entitiesReducer from './entitites_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
    entitites: entitiesReducer,
    session: sessionReducer,
    users: usersReducer,
    errors: {
        session: sessionErrorsReducer
    }
});

export default rootReducer;