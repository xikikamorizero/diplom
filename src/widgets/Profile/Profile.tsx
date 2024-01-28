"use client";
import { Context } from "@/shared/api";
import style from "./Profile.module.css";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Profile as ProfileIcon } from "iconsax-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export const Profile = observer(() => {
    const { store } = useContext(Context);
    let router = useRouter();
    const pathname = usePathname();
    let path = useSearchParams();
    let search = path.get("123");
    let test = usePathname();
    const current = new URLSearchParams(Array.from(path.entries()));

    useEffect(() => {
        console.log(search);
        console.log(path);
        console.log(current);
    }, []);
    console.log();
    return (
        <div className={style.profileContainer}>
            {store.isAuth ? (
                <div
                    className={style.profile}
                    style={{
                        backgroundImage: `url(${"https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg"})`,
                    }}
                ></div>
            ) : (
                <ProfileIcon
                    size="30"
                    color="#000000"
                    onClick={() => {
                        router.push("/login");
                        // current.set("123", "lox3");
                        // current.set("123", "lox3");
                        // const search = current.toString();
                        // const query = search ? `?${search}` : "";
                        // router.push(`${pathname}${query}`);
                    }}
                />
            )}
        </div>
    );
});
