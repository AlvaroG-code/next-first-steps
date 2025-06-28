import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Page",
    description: "Esta es la página de contacto de Alvaro",
    keywords: ["Contact Page", "Alvaro", "contacto"],
};

export default function ContactPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">Contact Page</span>
        </main>
    );
}
