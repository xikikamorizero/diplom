import { makeAutoObservable } from "mobx";

import * as types from "./types";
import * as services from "./services";

class Auth {
    constructor() {
        makeAutoObservable(this);
    }
}
class User {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly getUsers = services.User.getUsers;
}

export class Store {
    public readonly auth = new Auth();
    public readonly user = new User();
    public loader = false;
    public error = 0;
    public isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }
}
