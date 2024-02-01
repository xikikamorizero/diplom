"use client";
import { Context as GlobalContext } from "@/shared/api";
import { types } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect } from "react";

type PropsType = {
    userId: string;
};

export const useUser = ({ userId }: PropsType) => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    useEffect(() => {
        console.log(userId);
        if (!store.loading) {
            store.loading = true;
            global_store.store.user
                .getUser({ id: userId })
                .then((response) => {
                    store.user = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }, []);

    function Like(id: string) {
        store.loadingLike = true;
        global_store.store.user
            .like({ id })
            .then((response) => {
                
            })
            .catch((error) => {
                console.log("Like error");
            })
            .finally(() => {
                store.loadingLike = false;
            });
    }

    return {
        user: store.user,
        myProfile: global_store.store.profile,
    };
};
