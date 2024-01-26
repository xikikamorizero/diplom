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
    getProfessor(){
        return "/users/professor"
    },
    subscribe(id:number){
        return `​/users​/subscribe​/${id}`
    },
    unsubscribe(id:number){
        return `​/users​/unsubscribe​/${id}`
    },
    subscriptions(){
        return '/users/subscriptions'
    },
    subscribers(){
        return '/users/subscribers'
    }
};
export const course={
    get(id:number) {
        return `​/users​/course${id}`;
    },
};
