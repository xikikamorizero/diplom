import { CourseItem as CourseItemPage } from "@/page";
import axios from "axios";

type PropsType = {
    params: {
        id: string;
    };
};

export async function generateMetadata({ params }: PropsType) {
    try {
        const loginResponse = await axios.post("http://localhost:5000/auth/login", {
            email: "kogay@mail.ru",
            password: "kogay8066",
        });
        
        const courseResponse = await axios.get(`http://localhost:5000/courses/${params.id}`, {
            headers: {
                Authorization: `Bearer ${loginResponse.data.token}`,
            },
        });

        return {
            title: courseResponse.data.title,
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            title: `Course ${params.id}`,
        };
    }
}

export default function CourseItem({ params }: PropsType) {
    return (
        <>
            <CourseItemPage courseId={params.id} />
        </>
    );
}
