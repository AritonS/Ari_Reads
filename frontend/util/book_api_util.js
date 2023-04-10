export const fetchBooks = (userId, listId) => (
    $.ajax({
        url: `/api/users/${userId}/lists/${listId}/books`,
        method: 'GET'
    })
);

export const fetchBook = (userId, listId, bookId) => (
    $.ajax({
        url: `/api/users/${userId}/lists/${listId}/books/${bookId}`,
        method: 'GET'
    })
);

export const createBook = (userId, listId, book) => (
    $.ajax({
        url: `/api/users/${userId}/lists/${listId}/books`,
        method: 'POST',
        data: { book }
    })
);

export const updateBook = (userId, listId, book) => (
    $.ajax({
        url: `/api/users/${userId}/lists/${listId}/books/${book.id}`,
        method: 'PATCH',
        data: { book }
    })
);

export const deleteBook = (userId, listId, bookId) => (
    $.ajax({
        url: `/api/users/${userId}/lists/${listId}/books/${bookId}`,
        method: 'DELETE'
    })
);
