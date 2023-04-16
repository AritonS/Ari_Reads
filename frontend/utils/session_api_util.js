const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");

$.ajaxSetup({
    headers: {
        "X-CSRF-Token": csrfToken,
    },
});

export const postUser = (user) => {
    return $.ajax({
        url: "/api/users",
        method: "POST",
        data: { user },
    });
};

export const postSession = (user) => {
    return $.ajax({
        url: "/api/session",
        method: "POST",
        data: { user },
    });
};

export const deleteSession = () => {
    return $.ajax({
        url: "/api/session",
        method: "DELETE",
    });
};