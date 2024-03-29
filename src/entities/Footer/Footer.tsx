import style from "./Footer.module.css";
import { BottomNavigation } from "@/shared";
import { Profile } from "@/widgets";

export const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                Footer
                <a href="https://ru.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_33269052.htm#page=2&query=dark%20gradient&position=20&from_view=search&track=ais&uuid=54964c1b-572d-474d-8c50-2b902591076e">
                    Изображение от benzoix
                </a>{" "}
                на Freepik
            </div>
            <BottomNavigation profile={<Profile />} />
        </div>
    );
};
