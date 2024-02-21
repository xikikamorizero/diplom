import style from "./Portfolio.module.css";
import { Portfolio as PortfolioPage } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

export const Portfolio = () => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <PortfolioPage />
            </WithWrapper>
        </div>
    );
};
