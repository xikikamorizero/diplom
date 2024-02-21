import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/entities";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "VoxMentor",
    description:
        "VoxMentor is an innovative platform designed to make it easier to find and access information about teachers.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    href="/apple-icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </head>
            <body className={inter.className}>
                <div className="wrapper">
                    <Header />
                    <div className="center">{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
