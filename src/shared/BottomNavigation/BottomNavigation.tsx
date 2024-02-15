"use client";
import { ReactNode } from "react";
import style from "./BottomNavigation.module.css";
import Link from "next/link";
import { Home2, Teacher, Information, Direct } from "iconsax-react";
import { usePathname } from "next/navigation";

type PropsType = {
    profile?: ReactNode;
};

export const BottomNavigation = ({ profile }: PropsType) => {
    const pathname = usePathname();
    return (
        <div className={style.container}>
            <Link
                href={"/"}
                className={`${style.itemNav} ${
                    pathname == "/" ? style.itemNavAc : null
                }`}
                draggable={false}
            >
                <Home2 className={style.iconNav} />
                <p className={style.title}>home</p>
            </Link>
            <Link
                href={"/users"}
                className={`${style.itemNav} ${
                    pathname == "/users" ? style.itemNavAc : null
                }`}
                draggable={false}
            >
                <Teacher className={style.iconNav} />
                <p className={style.title}>teacher</p>
            </Link>
            <div className={style.itemNavProfile}>
                <div className={style.profileContainer}>{profile}</div>
            </div>
            <Link
                href={"/portfolio"}
                className={`${style.itemNav} ${
                    pathname == "/portfolio" ? style.itemNavAc : null
                }`}
                draggable={false}
            >
                <Direct className={style.iconNav} />
                <p className={style.title}>project</p>
            </Link>
            <Link
                href={"/aboutUs"}
                className={`${style.itemNav} ${
                    pathname == "/aboutUs" ? style.itemNavAc : null
                }`}
                draggable={false}
            >
                <Information className={style.iconNav} />
                <p className={style.title}>about</p>
            </Link>
        </div>
    );
};
