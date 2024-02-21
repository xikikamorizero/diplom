import style from "./Profile.module.css";
import { ProfileInfo } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

export const Profile = () => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <ProfileInfo />
            </WithWrapper>
        </div>
    );
};
