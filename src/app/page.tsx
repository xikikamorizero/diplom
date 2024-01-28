import type { Metadata } from "next";
import { Main } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Home",
    description: "VoxMentor home page",
};

export default function Home() {
    return (
        <>
            <Main />
            {/* <EditPortfolio /> */}
        </>
    );
}
