import { Lesson } from "@/widgets";
import style from "./LessonItem.module.css";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    lessonId: string;
};

export const LessonItem = ({ lessonId }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <Lesson lessonId={lessonId} />
            </WithWrapper>
        </div>
    );
};
