import style from "./CreateCourse.module.css";
import { CreateCourse as CreateCourseWidget } from "@/widgets";

export const CreateCourse = () => {
    return (
        <div className={style.container}>
            <p className={style.title}>CreateCourse</p>
            <CreateCourseWidget />
        </div>
    );
};
