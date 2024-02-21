import style from "./CreateCourse.module.css";
import { CreateCourse as CreateCourseWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

export const CreateCourse = () => {
    return (
        <div className={style.container}>
            <p className={style.title}>CreateCourse</p>
            <WithWrapper>
                <CreateCourseWidget />
            </WithWrapper>
        </div>
    );
};
