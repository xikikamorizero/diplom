"use client";
import { Context } from "@/shared/api";
import style from "./Profile.module.css";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Profile as ProfileIcon } from "iconsax-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { baseUrl } from "@/shared/api/const";
import Link from "next/link";

export const Profile = observer(() => {
    const { store } = useContext(Context);
    let router = useRouter();
    const pathname = usePathname();
    let path = useSearchParams();
    let search = path.get("123");
    let test = usePathname();
    const current = new URLSearchParams(Array.from(path.entries()));

    useEffect(() => {
        // console.log(search);
        // console.log(path);
        // console.log(current);
        console.log("rednder");
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
    }, []);
    return (
        <div className={style.profileContainer}>
            {store.isAuth ? (
                <Link className={style.link} href={"/profile"}>
                    <div
                        className={style.profile}
                        style={{
                            backgroundImage: `url(${
                                baseUrl + store.profile?.avatar
                            })`,
                        }}
                    ></div>
                </Link>
            ) : (
                <Link className={style.link} href={"/login"}>
                    <ProfileIcon
                        size="30"
                        color="#000000"
                        onClick={() => {
                            // current.set("123", "lox3");
                            // current.set("123", "lox3");
                            // const search = current.toString();
                            // const query = search ? `?${search}` : "";
                            // router.push(`${pathname}${query}`);
                        }}
                    />
                </Link>
            )}
        </div>
    );
});
