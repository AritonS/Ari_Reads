import * as ListApiUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

export const receiveLists = lists => ({
    type: RECEIVE_LISTS,
    lists
});

export const receiveList = list => ({
    type: RECEIVE_LIST,
    list
});

export const removeList = listId => ({
    type: REMOVE_LIST,
    listId
});

export const fetchLists = userId => dispatch => (
    ListApiUtil.fetchLists(userId).then(lists =>
        dispatch(receiveLists(lists))
    )
);

export const fetchList = (userId, listId) => dispatch => (
    ListApiUtil.fetchList(userId, listId).then(list =>
        dispatch(receiveList(list))
    )
);

export const createList = (userId, list) => dispatch => (
    ListApiUtil.createList(userId, list).then(list =>
        dispatch(receiveList(list))
    )
);

export const updateList = (userId, list) => dispatch => (
    ListApiUtil.updateList(userId, list).then(list =>
        dispatch(receiveList(list))
    )
);

export const deleteList = (userId, listId) => dispatch => (
    ListApiUtil.deleteList(userId, listId).then(() =>
        dispatch(removeList(listId))
    )
);
