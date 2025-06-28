import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing Page",
    description: "Esta es la página de precios de Alvaro",
    keywords: ["Pricing Page", "Alvaro", "precios"],
};

export default function PricingPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">Pricing Page</span>
        </main>
    );
}
