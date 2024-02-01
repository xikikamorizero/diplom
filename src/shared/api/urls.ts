export const auth = {
    login() {
        return "/auth/login";
    },
    registration() {
        return "/auth/registration";
    },
};

export const user = {
    get() {
        return "/users";
    },
    getUser(id: string) {
        return `/users/${id}`;
    },
    getProfessor() {
        return "/users/professor";
    },
    getProfile() {
        return "/users/profile/me";
    },
    like(id: string) {
        return `/users/like/${id}`;
    },
    unlike(id: string) {
        return `/users/unlike/${id}`;
    },
    dislike(id: string) {
        return `/users/dislike/${id}`;
    },
    undislike(id: string) {
        return `/users/undislike/${id}`;
    },

    subscribe(id: string) {
        return `​/users​/subscribe​/${id}`;
    },
    unsubscribe(id: string) {
        return `​/users​/unsubscribe​/${id}`;
    },
    subscriptions() {
        return "/users/subscriptions";
    },
    subscribers() {
        return "/users/subscribers";
    },
};
export const portfolio = {
    get() {
        return "/portfolio";
    },
};
export const course = {
    get(id: string) {
        return `​/users​/course${id}`;
    },
};
