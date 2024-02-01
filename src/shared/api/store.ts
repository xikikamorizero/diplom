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
    public readonly getUser = services.User.getUser;
    public readonly getProfile = services.User.getProfile;
    public readonly like = services.User.like;
    public readonly unlike = services.User.unlike;
    public readonly dislike = services.User.dislike;
    public readonly undislike = services.User.undislike;
    public readonly subscribe = services.User.subscribe;
    public readonly unsubscribe = services.User.unsubscribe;
}
class Portfolio {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly getPortfolioList = services.Portfolio.getPortfolio;
}

export class Store {
    public readonly auth = new Auth();
    public readonly user = new User();
    public readonly portfolio = new Portfolio();
    public profile: types.userType | null = null;
    public loader = false;
    public error = 0;
    public isAuth = false;
    private token: string | null = null;

    constructor() {
        makeAutoObservable(this);
        this.loadFromLocalStorage = this.loadFromLocalStorage.bind(this);
        this.loadFromLocalStorage();
    }

    loadFromLocalStorage() {
        const token = localStorage.getItem("token");
        if (token) {
            this.token = token;
        }
    }
    saveToLocalStorage() {
        localStorage.setItem("token", JSON.stringify(this.token));
    }
}
