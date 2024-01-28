import style from "./Card.module.css";
import { Card as CardAnt } from "antd";
import { Profile } from "iconsax-react";
import { baseUrl } from "../api/const";

const { Meta } = CardAnt;

type PropsType = {
    src: string | null;
    name: string | null;
    specialization: string | null;
};

export const Card = ({ ...props }: PropsType) => {
    return (
        <CardAnt
            hoverable
            className={style.cardContainer}
            cover={
                <img
                    draggable={false}
                    className={style.avatar}
                    alt="avatar"
                    src={
                        props.src
                            ? baseUrl + props.src
                            : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    }
                />
            }
        >
            <Meta
                style={{ margin: "0", padding: "0" }}
                title={
                    <p className={style.name}>
                        {props.name ? props.name : "undefined"}
                    </p>
                }
                description={
                    <p className={style.specialization}>
                        {props.specialization ? props.specialization : "null"}
                    </p>
                }
            />
        </CardAnt>
    );
};
