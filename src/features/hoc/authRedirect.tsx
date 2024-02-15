"use client";
import { Context } from "@/shared/api";
import React, { ReactNode } from "react";
import { useContext } from "react";
import { useRouter } from "next/navigation";

type PropsType = {
    children: ReactNode;
};

export const WithWrapper = ({ children }: PropsType) => {
    const { store } = useContext(Context);
    const router = useRouter();
    if (!store.isAuth) {
        router.push("/login");
    }
    return children;
};
