"use client";
import { Context as GlobalContext } from "@/shared/api";
import { types } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect } from "react";

export const usePortfolio = () => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    useEffect(() => {
        if (!store.loading) {
            store.loading = true;
            global_store.store.portfolio
                .getPortfolioList({ page: store.page, limit: store.limit })
                .then((response) => {
                    store.portfolio = response.data.portfolio;
                    store.count = response.data.totalPortfolio;
                    store.page = response.data.page;
                    store.page_count = response.data.pageCount;
                })
                .catch((error) => {
                    // throw Error(error);
                    console.log("ошибка", error);
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }, [store.page]);

    return {
        portfolio: store.portfolio,
        page: store.page,
        pageCount: store.page_count,
        limit: store.limit,
    };
};
