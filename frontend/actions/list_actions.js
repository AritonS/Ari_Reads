import * as ListApiUtil from '../utils/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

const receiveLists = lists => {
    return {
        type: RECEIVE_LISTS,
        lists
    }
}

const receiveList = list => {
    return {
        type: RECEIVE_LIST,
        list
    }
}

const removeList = listId => {
    return {
        type: REMOVE_LIST,
        listId
    }
}

export const fetchLists = userId => dispatch => {
    return ListApiUtil.fetchLists(userId)
        .then(lists => dispatch(receiveLists(lists)))
}

export const fetchList = (userId, listId) => dispatch => {
    return ListApiUtil.fetchList(userId, listId)
        .then(list => dispatch(receiveList(list)))
}

export const createList = (userId, list) => dispatch => {
    return ListApiUtil.createList(userId, list)
        .then(createdList => dispatch(receiveList(createdList)))
}

export const updateList = (userId, list) => dispatch => {
    return ListApiUtil.updateList(userId, list)
        .then(updatedList => dispatch(receiveList(updatedList)))
}

export const deleteList = (userId, listId) => dispatch => {
    return ListApiUtil.deleteList(userId, listId)
        .then(() => dispatch(removeList(listId)))
}
