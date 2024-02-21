import style from "./Users.module.css";
import { Users as UsersWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

export const Users = async () => {
    return (
        <div className={style.wrapper}>
            <WithWrapper>
                <UsersWidget />
            </WithWrapper>
        </div>
    );
};
