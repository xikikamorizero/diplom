import type { Metadata } from "next";
import { CreatePortfolio as CreatePortfolioPage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Create Portfolio",
    description: "VoxMentor create portfolio page",
};

export default function CreatePortfolio() {
    return (
        <>
            <CreatePortfolioPage />
        </>
    );
}
