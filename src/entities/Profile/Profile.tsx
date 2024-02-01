import style from "./Profile.module.css";
import { baseUrl } from "@/shared/api/const";
import { Profile as ProfileIcon } from "iconsax-react";
import { Categories } from "@/shared";
import { Avatar, Tooltip } from "antd";
import Link from "next/link";
import { types } from "@/shared/api";

type PropsType = {
    user: types.userType | null;
    myProf: boolean;
    isLiked?: boolean;
    isDisliked?: boolean;
    isSubscribe?: boolean;
};

export const Profile = ({
    user,
    myProf,
    isLiked,
    isDisliked,
    isSubscribe,
}: PropsType) => {
    return (
        <div className={style.container}>
            <div className={style.userInfo}>
                <div className={style.avatarContainer}>
                    {user?.avatar ? (
                        <img
                            className={style.avatar}
                            draggable={false}
                            alt={"avatar"}
                            src={baseUrl + user?.avatar}
                        />
                    ) : (
                        <ProfileIcon size={"100%"} />
                    )}
                </div>
                <div className={style.likesContainer}>
                    <div
                        className={`${style.likeAndDis} ${style.like} ${
                            isLiked ? style.likeAndDisActive : null
                        }`}
                    >
                        <div></div>
                        <p>{user?.likes}</p>
                    </div>
                    <div
                        className={`${style.likeAndDis} ${style.dislike} ${
                            isDisliked ? style.likeAndDisActive : null
                        }`}
                    >
                        <div></div>
                        <p>{user?.dislikes}</p>
                    </div>
                </div>
                <p className={style.userName}>{user?.name}</p>
                <p className={style.place_of_work}>{user?.place_of_work}</p>
                {!myProf ? (
                    <div className={style.subscribe}>
                        {isSubscribe ? "unsubscribe" : "subscribe"}
                    </div>
                ) : null}
                <p className={style.science_degree}>{user?.science_degree}</p>
                <p className={style.contacts}>{user?.contacts}</p>
                <Categories categories={user?.categories} />

                <div className={style.subscribers}>
                    <p>subscribers:</p>
                    <Avatar.Group
                        maxCount={5}
                        maxStyle={{
                            userSelect: "none",
                            color: "#000000",
                            backgroundColor: "var(--main_color)",
                        }}
                    >
                        {user?.subscribers.length !== 0 ? (
                            user?.subscribers.map((a, i) => (
                                <Link
                                    href={`/users/${a.id}`}
                                    style={{ borderRadius: "50%" }}
                                >
                                    <Tooltip
                                        title={a.name}
                                        placement="top"
                                        key={i}
                                    >
                                        <Avatar src={baseUrl + a?.avatar} />
                                    </Tooltip>
                                </Link>
                            ))
                        ) : (
                            <p>no subscribers</p>
                        )}
                    </Avatar.Group>
                </div>
            </div>
            <div className={style.userProject}>
                <div className={style.userWorkLinks}>
                    <div>Portfolio</div>
                    <div>Course</div>
                </div>
                <div className={style.projectContainer}></div>
            </div>
        </div>
    );
};
