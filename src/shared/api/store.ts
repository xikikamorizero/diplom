import { makeAutoObservable } from "mobx";

import * as types from "./types";
import * as services from "./services";

class Auth {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly login = services.Auth.login;
    public readonly registration = services.Auth.registration;
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
    private token = null;

    constructor() {
        makeAutoObservable(this);
        this.loadFromLocalStorage = this.loadFromLocalStorage.bind(this);
        this.loadFromLocalStorage();
    }

    loadFromLocalStorage() {
        const storedBookmarks = localStorage.getItem("bookmarks");
        if (storedBookmarks) {
            this.token = JSON.parse(storedBookmarks);
        }
    }
    saveToLocalStorage() {
        localStorage.setItem("bookmarks", JSON.stringify(this.token));
    }
}
