"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect } from "react";

export const useProfile = () => {
    const { store } = useContext(GlobalContext);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            store.user
                .getProfile()
                .then((response) => {
                    store.profile = response.data;
                    store.isAuth = true;
                    console.log(store.profile);
                })
                .catch(() => {
                    store.isAuth = false;
                });
        }
    }, [store.update_profile]);

    return {
        store: store,
    };
};
