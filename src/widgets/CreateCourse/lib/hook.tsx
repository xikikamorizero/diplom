"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

export const useCourse = () => {
    let router = useRouter();
    const global_store = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [level, setLevel] = useState("");
    const [category, setCategory] = useState("");
    const [uploadedImages, setUploadedImages] = useState<any>(null);

    function createCourse() {
        if (!loading) {
            setLoading(true);
            global_store.store.course
                .create({
                    title: title,
                    description: description,
                    level: level,
                    category: category,
                    image: uploadedImages,
                })
                .then((response) => {
                    if (response.status == 200) {
                        router.push("/profile");
                    }
                })
                .catch((error) => {
                    console.log("ошибка при создании  курса");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    return {
        CreateCourse: createCourse,
        loading: loading,
        title: title,
        setTitle: setTitle,
        description: description,
        setDescription: setDescription,
        level: level,
        setLevel: setLevel,
        category: category,
        setCategory: setCategory,
        uploadedImages: uploadedImages,
        setUploadedImages: setUploadedImages,
    };
};
