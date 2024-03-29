import type { Metadata } from "next";
import { Users as UsersPage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Users",
    description: "VoxMentor users page",
};

export default function Users() {
    return (
        <>
            <UsersPage />
        </>
    );
}
