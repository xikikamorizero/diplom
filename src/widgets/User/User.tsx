"use client";
import style from "./User.module.css";
import { useUser } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { Profile } from "@/entities/Profile/Profile";
import { types } from "@/shared/api";

type PropsType = {
    userId: string;
};

export const User = observer(({ ...props }: PropsType) => {
    const { user, myProfile } = useUser({ userId: props.userId });
    function isIdPresent(
        arrayOfObjects: types.Likes[] | types.Dislike[] | types.Subscribers[] | undefined,
        targetId: string
    ) {
        if (arrayOfObjects) {
            return arrayOfObjects.some(
                (obj) => obj.id === Number(targetId)
            );
        } else {
            return false;
        }
    }
    return (
        <div className={style.containert}>
            <Profile
                user={user}
                myProf={false}
                isLiked={isIdPresent(myProfile?.likedUsers, props.userId)}
                isDisliked={isIdPresent(myProfile?.dislikedUsers, props.userId)}
                isSubscribe={isIdPresent(
                    myProfile?.subscriptions,
                    props.userId
                )}
            />
        </div>
    );
});
