import * as UserApiUtil from '../utils/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveUsers = users => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

const removeUser = userId => {
    return {
        type: REMOVE_CURRENT_USER,
        userId
    }
}

export const fetchUsers = () => dispatch => {
    return UserApiUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
}

export const fetchUser = userId => dispatch => {
    return UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}

export const createUser = user => dispatch => {
    return UserApiUtil.createUser(user)
        .then(createdUser => dispatch(receiveUser(user)))
}

export const updateUser = user => dispatch => {
    return UserApiUtil.updateUser(user)
        .then(updatedUser => dispatch(receiveUser(user)))
}

export const deleteUser = userId => dispatch => {
    return UserApiUtil.deleteUser(userId)
        .then(() => dispatch(removeUser(userId)))
}