import type { Metadata } from "next";
import { Login } from "@/page";
import { RegistrationForm } from "@/widgets";

export const metadata: Metadata = {
    title: "VoxMentor | Registration",
    description: "VoxMentor registration page",
};

export default function Registration() {
    return (
        <>
            <Login form={<RegistrationForm />} title={"Sing up"} />
        </>
    );
}
