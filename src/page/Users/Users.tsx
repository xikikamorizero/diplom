import style from "./Users.module.css";
import { Users as UsersWidget } from "@/widgets";
import { Card } from "@/entities";

export const Users = async () => {
    return (
        <div className={style.wrapper}>
            <p className={style.title}>Users</p>
            <UsersWidget />
        </div>
    );
};
