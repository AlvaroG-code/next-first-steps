import { Navbar } from "@/components";

export default function publicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center p-24">{children}</main>
        </>
    );
}
