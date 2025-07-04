import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Title",
    description: "SEO Description",
    keywords: ["About Page", "Alvaro", "información"],
};

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">About Page</span>
            <p className="text-2xl mt-4">
                Esta es la página de información de Alvaro
            </p>
        </main>
    );
}
