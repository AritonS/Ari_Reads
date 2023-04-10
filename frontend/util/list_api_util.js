export const fetchLists = userId => {
    return $.ajax({
        url: `/api/users/${userId}/lists`,
        method: 'GET'
    })
};

export const fetchList = (userId, listId) => {
    return $.ajax({
        url: `/api/users/${userId}/lists/${listId}`,
        method: 'GET'
    })
};

export const createList = (userId, list) => {
    return $.ajax({
        url: `/api/users/${userId}/lists`,
        method: 'POST',
        data: { list }
    })
};

export const updateList = (userId, list) => {
    return $.ajax({
        url: `/api/users/${userId}/lists/${list.id}`,
        method: 'PATCH',
        data: { list }
    })
};

export const deleteList = (userId, listId) => {
    return $.ajax({
        url: `/api/users/${userId}/lists/${listId}`,
        method: 'DELETE'
    })
};