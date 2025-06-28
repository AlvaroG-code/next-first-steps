"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
    const pathName = usePathname();
    const isActive = pathName === path;

    return (
        <Link
            href={path}
            className={`mr-2 transition-all hover:underline hover:text-blue-400 ${
                isActive ? "text-blue-500" : ""
            }`}
        >
            {text}
        </Link>
    );
};
