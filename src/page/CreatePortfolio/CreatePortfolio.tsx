import style from "./CreatePortfolio.module.css";
import { CreatePortfolio as CreatePortfolioWidget } from "@/widgets";

export const CreatePortfolio = () => {
    return (
        <div className={style.container}>
            <p className={style.title}>Create Portfolio</p>
            <CreatePortfolioWidget />
        </div>
    );
};
