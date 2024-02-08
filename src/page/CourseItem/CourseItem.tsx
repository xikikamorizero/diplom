import style from "./CourseItem.module.css";
import { Course as CourseWidget } from "@/widgets";

type PropsType = {
    courseId: string;
};

export const CourseItem = ({ courseId }: PropsType) => {
    return (
        <div className={style.container}>
            <CourseWidget courseId={courseId} />
        </div>
    );
};
