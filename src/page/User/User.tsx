import style from "./User.module.css";
import { User as UserWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    userId: string;
};

export const User = ({ userId }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <UserWidget userId={userId} />
            </WithWrapper>
        </div>
    );
};
