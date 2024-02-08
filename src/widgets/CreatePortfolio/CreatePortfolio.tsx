"use client";
import style from "./CreatePortfolio.module.css";
import React, { useContext, useState } from "react";
import { Context } from "@/shared/api";
import { useRouter } from "next/navigation";
import { EditorJsEdit } from "../../entities/EditorJsEdit/EditorJsEdit";
import { ImageInput } from "@/shared";

export const CreatePortfolio = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");
    const [title, setTitle] = useState("");
    const [uploadedImages, setUploadedImages] = useState<File|null>(null);

    const { store } = useContext(Context);
    let router = useRouter();
    console.log(data);

    function Create() {
        if (!loading) {
            setLoading(true);
            store.portfolio
                .create({ title: title, content: data, image: uploadedImages })
                .then((response) => {
                    router.push("/profile");
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <input
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={"add title"}
                />
                <div className={style.inputImage}>
                    <ImageInput image={uploadedImages} setImage={setUploadedImages} />
                </div>

                <EditorJsEdit editorData={data} setEditorData={setData} />
                <button
                    disabled={loading}
                    className={style.buttonCreate}
                    onClick={() => {
                        Create();
                    }}
                >
                    Create
                </button>
            </div>
        </div>
    );
};

// const EditorJs = (props) => {
//     const ejInstance = useRef();

//     const initEditor = () => {
//         const editor = new EditorJS({
//             holder: "editorjs",
//             onReady: () => {
//                 ejInstance.current = editor;
//             },
//             autofocus: true,
//             data: props.editorData,
//             onChange: async () => {
//                 let content = await editor.saver.save();
//                 props.setEditorData(JSON.stringify(content));
//             },
//             tools: {
//                 header: {
//                     class: Header,
//                     inlineToolbar: true,
//                 },
//                 paragraph: {
//                     class: Paragraph,
//                     inlineToolbar: true,
//                 },
//                 list: {
//                     class: List,
//                     inlineToolbar: true,
//                 },
//                 checklist: Checklist,
//                 quote: Quote,
//                 warning: Warning,
//                 code: Code,
//                 image: SimpleImage,
//                 table: Table,
//                 inlineCode: InlineCode,
//                 marker: Marker,
//                 delimiter: Delimiter,
//                 raw: Raw,
//                 Math: EJLaTeX,
//             },
//         });
//     };

//     useEffect(() => {
//         if (ejInstance.current === null) {
//             initEditor();
//         }

//         return () => {
//             ejInstance?.current?.destroy();
//             ejInstance.current = null;
//         };
//     }, []);

//     return (
//         <>
//             <div id="editorjs" className={style.editorJs}></div>
//         </>
//     );
// };
