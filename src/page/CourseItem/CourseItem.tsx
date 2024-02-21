import style from "./CourseItem.module.css";
import { Course as CourseWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    courseId: string;
};

export const CourseItem = ({ courseId }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <CourseWidget courseId={courseId} />
            </WithWrapper>
        </div>
    );
};
