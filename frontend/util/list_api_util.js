export const fetchLists = userId => (
    $.ajax({
        url: `/api/users/${userId}/lists`,
        method: 'GET'
    })
);

export const fetchList = (userId, listId) => (
    $.ajax({
        url: `/api/users/${userId}/lists/${listId}`,
        method: 'GET'
    })
);

export const createList = (userId, list) => (
    $.ajax({
        url: `/api/users/${userId}/lists`,
        method: 'POST',
        data: { list }
    })
);

export const updateList = (userId, list) => (
    $.ajax({
        url: `/api/users/${userId}/lists/${list.id}`,
        method: 'PATCH',
        data: { list }
    })
);

export const deleteList = (userId, listId) => (
    $.ajax({
        url: `/api/users/${userId}/lists/${listId}`,
        method: 'DELETE'
    })
);