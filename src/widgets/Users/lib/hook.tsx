"use client";
import { Context as GlobalContext } from "@/shared/api";
import { types } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect } from "react";
import { error } from "console";

export const useUsers = () => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    useEffect(() => {
        global_store.store.user
            .getUsers({ page: store.page, limit: store.limit })
            .then((response) => {
                store.users = response.data.users;
                store.count = response.data.totalUsers;
                store.page = response.data.page;
                store.page_count = response.data.pageCount;
            })
            .catch((error) => {
                // throw Error(error);
                console.log("ошибка",error)
            });
    }, []);

    return {
        users: store.users,
        page: store.page,
        pageCount: store.page_count,
        limit: store.limit,
    };
};
