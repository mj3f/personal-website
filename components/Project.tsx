import React from "react";
import Link from "next/link";

export interface Props {
    name: string;
    description: string;
    sourceCodeLink: string;
    link?: string;
    imageSrc?: string;
}

const Project: React.FC<Props> = (props: Props) => {
    const anchorClass = "border-b-2 border-transparent px-1 pb-1 bg-green-300 hover:bg-white hover:border-amber-300" +
        "dark:text-white dark:bg-rose-500 dark:hover:bg-slate-800"
    return (
        <div className="flex flex-col border-2 border-amber-300 rounded p-4 m-2 w-1/4">
            <h3 className="text-2xl font-semibold">{props.name}</h3>
            <p>{props.description}</p>
            <div className="flex">
                <Link href={"https://github.com/mj3f/" + props.sourceCodeLink}><a
                    className={anchorClass}>View
                    Source Code</a></Link>
                {props.link ? <Link href={props.link}><a
                    className={anchorClass}>Visit</a></Link> : null}
            </div>
        </div>
    );
}

export default Project;
