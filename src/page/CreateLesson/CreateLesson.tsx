import style from "./CreateLesson.module.css";
import { CreateLesson as CreateLessonWidget } from "@/widgets";

export const CreateLesson = () => {
    return (
        <div className={style.container}>
            <p className={style.title}>CreateLesson</p>
            <CreateLessonWidget />
        </div>
    );
};
