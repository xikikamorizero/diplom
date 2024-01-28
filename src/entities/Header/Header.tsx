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
                            draggable={false}
                            width={50}
                            height={50}
                            src={logo}
                            alt={"logo"}
                        />
                        <p>VoxMentor</p>
                    </div>
                    <div className={style.linkContainer}>
                        <NavLink href={"/portfolio"} text={"portfolio"} />
                        <NavLink href={"/aboutUs"} text={"about"} />
                        <Profile />
                    </div>
                </div>
            </div>
        </div>
    );
};
