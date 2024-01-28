import { ReactNode } from "react";
import style from "./Login.module.css";

type PropsType = {
    form: ReactNode;
    title: string;
};

export const Login = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <div className={style.login}>
                <p className={style.title}>{props.title}</p>
                {props.form}
            </div>
        </div>
    );
};
