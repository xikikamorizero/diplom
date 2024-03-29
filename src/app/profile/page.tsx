import type { Metadata } from "next";
import { Profile as ProfilePage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Profile",
    description: "VoxMentor user profile",
};

export default function Profile() {
    return (
        <>
            <ProfilePage />
        </>
    );
}
