export const fetchUsers = () => {
    return $.ajax({
        url: '/api/users',
        method: 'GET'
    })
}

export const fetchUser = username => {
    return $.ajax({
        url: `/api/users/${username}`,
        method: 'GET'
    })
}

export const createUser = user => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user: user }
    })
}

export const updateUser = user => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: { user: user }
    })
}

export const deleteUser = userId => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: DELETE
    })
}