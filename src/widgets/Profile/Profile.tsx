"use client";
import { Context } from "@/shared/api";
import style from "./Profile.module.css";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Profile as ProfileIcon } from "iconsax-react";

export const Profile = observer(() => {
    const { store } = useContext(Context);
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
                <ProfileIcon size="30" color="#000000" />
            )}
        </div>
    );
});
