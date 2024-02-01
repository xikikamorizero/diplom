"use client";
import { Profile } from "@/entities/Profile/Profile";
import style from "./ProfileInfo.module.css";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "@/shared/api";

export const ProfileInfo = observer(() => {
    const { store } = useContext(Context);
    return (
        <div className={style.container}>
            <Profile user={store.profile} myProf={true} />
        </div>
    );
});
