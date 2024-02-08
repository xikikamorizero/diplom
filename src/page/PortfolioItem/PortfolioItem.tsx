import style from "./PortfolioItem.module.css";
import { PortfolioItem as PortfolioItemWidget } from "@/widgets";

type PropsType = {
    portfolioId: string;
};

export const PortfolioItem = ({ portfolioId }: PropsType) => {
    return (
        <div className={style.container}>
            <PortfolioItemWidget portfolioId={portfolioId}  />
        </div>
    );
};
