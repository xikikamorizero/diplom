import styled from "../AboutUs/AboutUs.module.css";

type Props = {
    title?: string;
    text?: string;
};

export const AboutUs = () => {
    return (
        <div className={styled.container}>
            <div className={styled.aboutUs}>
                <Block
                    title={"О сайте"}
                    text={
                        "Это проект, является сугубо некоммерческим проектом созданный с целью демонстрации моих навыков веб-разработки и представления моей дипломной работы."
                    }
                />
                <Block
                    title={"На основе чего ?"}
                    text={
                        "В сайте используются множество различных открытых ресурсов. Таких как картиртинки иконки и различная информация бекенд был также написан моими личными лапками."
                    }
                />
            </div>
        </div>
    );
};

const Block = ({ title, text }: Props) => {
    return (
        <div className={styled.containerInfo}>
            <div className={styled.title}>{title}</div>
            <div className={styled.text}>{text}</div>
        </div>
    );
};
