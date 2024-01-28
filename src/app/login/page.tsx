import type { Metadata } from "next";
import { Login as LoginPage } from "@/page";
import { LoginForm } from "@/widgets";

export const metadata: Metadata = {
    title: "VoxMentor | Login",
    description: "VoxMentor login page",
};

export default function Login() {
    return (
        <>
            <LoginPage form={<LoginForm />} title={"Sing in"} />
        </>
    );
}
