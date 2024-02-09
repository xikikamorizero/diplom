"use client";
import style from "./User.module.css";
import { useUser } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { Profile } from "@/entities/Profile/Profile";
import { types } from "@/shared/api";
import { SubUnSub } from "../SubUnSub/SubUnSub";
import { LikeDisLike } from "../LikeDisLike/LikeDisLike";

type PropsType = {
    userId: string;
};

export const User = observer(({ ...props }: PropsType) => {
    const { user, myProfile, isIdPresent } = useUser({ userId: props.userId });
    return (
        <div className={style.containert}>
            <Profile
                user={user}
                myProf={false}
                myiD={myProfile?.id}
                isLiked={isIdPresent(myProfile?.likedUsers, props.userId)}
                isDisliked={isIdPresent(myProfile?.dislikedUsers, props.userId)}
                isSubscribe={isIdPresent(
                    myProfile?.subscriptions,
                    props.userId
                )}
                subBlock={
                    <SubUnSub
                        isSubscribe={isIdPresent(
                            myProfile?.subscriptions,
                            props.userId
                        )}
                        id={props.userId}
                    />
                }
                likeBlock={
                    <LikeDisLike
                        id={props.userId}
                        likes={user?.likes}
                        dislikes={user?.dislikes}
                        isLiked={isIdPresent(
                            myProfile?.likedUsers,
                            props.userId
                        )}
                        isDisliked={isIdPresent(
                            myProfile?.dislikedUsers,
                            props.userId
                        )}
                    />
                }
            />
        </div>
    );
});
