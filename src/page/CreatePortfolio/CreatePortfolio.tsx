import style from "./CreatePortfolio.module.css";
import { CreatePortfolio as CreatePortfolioWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

export const CreatePortfolio = () => {
    return (
        <div className={style.container}>
            <p className={style.title}>Create Portfolio</p>
            <WithWrapper>
                <CreatePortfolioWidget />
            </WithWrapper>
        </div>
    );
};
