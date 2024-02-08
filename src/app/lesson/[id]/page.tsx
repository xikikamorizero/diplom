import { LessonItem } from "@/page";

type PropsType = {
    params: {
        id: string;
    };
};

export async function generateMetadata({ params }: PropsType) {
    const user = await fetch(`http://localhost:5000/users/${params.id}`)
        .then((res) => res.json())
        .catch((error) => null);
    return {
        title: user?.name ? user.name : `Course ${params.id}`,
    };
}

export default function Lesson({ params }: PropsType) {
    return (
        <>
            <LessonItem lessonId={params.id} />
        </>
    );
}
