"use client";
import { Context } from "@/shared/api";
import style from "./Profile.module.css";
import { observer } from "mobx-react-lite";
import React from "react";
import { Profile as ProfileIcon } from "iconsax-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { baseUrl } from "@/shared/api/const";
import Link from "next/link";
import { useProfile } from "./lib/hook";

export const Profile = observer(() => {
    let router = useRouter();
    const pathname = usePathname();
    let path = useSearchParams();
    let search = path.get("123");
    let test = usePathname();
    const current = new URLSearchParams(Array.from(path.entries()));
    const {store} = useProfile() 
    // console.log(search);
    // console.log(path);
    // console.log(current);

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
