import { Lesson } from "@/widgets";
import style from "./LessonItem.module.css";

type PropsType = {
    lessonId: string;
};

export const LessonItem = ({lessonId}:PropsType) => {
    return (
        <div className={style.container}>
            <Lesson lessonId={lessonId} />
        </div>
    );
};
