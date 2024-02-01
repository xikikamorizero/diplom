import style from "./User.module.css";
import { User as UserWidget } from "@/widgets";
import { Categories } from "@/shared";

type PropsType={
    userId:string;
}

export const User = ({userId}:PropsType) => {
    return (
        <div className={style.container}>
            <UserWidget userId={userId} />
        </div>
    );
};
