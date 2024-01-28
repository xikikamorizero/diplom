import { makeAutoObservable } from "mobx";

export class Store {
    public users: any = [];
    public count: number | null = null;
    public page_count: number | null = null;
    public page: number = 1;
    public limit: number = 10;

    constructor() {
        makeAutoObservable(this);
    }
}
