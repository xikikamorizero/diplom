import { ReactNode } from "react";
import style from "./Login.module.css";
import { LoginForm } from "@/widgets";

type PropsType = {
    title: string;
};

export const Login = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <div className={style.login}>
                <p className={style.title}>{props.title}</p>
                <LoginForm />
            </div>
        </div>
    );
};
