import style from "./Header.module.css";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { NavLink } from "@/shared";
import { Profile } from "@/widgets";

export const Header = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.navbar}>
                    <div className={style.linkContainer}>
                        <NavLink href={"/"} text={"home"} />
                        <NavLink href={"/users"} text={"users"} />
                    </div>
                    <div className={style.logo}>
                        <Image
                            className={style.icon_logo}
                            draggable={false}
                            src={logo}
                            alt={"logo"}
                        />
                        <p>VoxMentor</p>
                    </div>
                    <div className={style.linkContainer}>
                        <NavLink href={"/portfolio"} text={"portfolio"} />
                        <NavLink href={"/aboutUs"} text={"about"} />
                        <div className={style.profileContainer}>
                            <Profile />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
