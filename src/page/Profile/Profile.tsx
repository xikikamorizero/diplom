import style from "./Profile.module.css";
import { ProfileInfo } from "@/widgets";

export const Profile = () => {
    return (
        <div className={style.container}>
            <ProfileInfo />
        </div>
    );
};
