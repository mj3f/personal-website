import Link from "next/link";
import React from "react";

export interface CustomLinkProps {
    text: string;
    link: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ text, link }) => (
    <Link href={link}>
        <a className="px-1 pb-1 bg-green-300 hover:bg-white border-b-2 border-transparent hover:border-amber-300 dark:text-white dark:bg-rose-500 dark:hover:bg-slate-800">{text}</a>
    </Link>
);

export default CustomLink;
