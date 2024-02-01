import style from './Portfolio.module.css';
import { Portfolio as PortfolioPage } from '@/widgets';

export const Portfolio=()=>{
    return(
        <div className={style.container}>
            <PortfolioPage />
        </div>
    )
}