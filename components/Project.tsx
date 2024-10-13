import React from "react";
import CustomLink from "./CustomLink";

export interface Props {
    name: string;
    description: string;
    sourceCodeLink: string;
    link?: string;
    imageSrc?: string;
}

const Project: React.FC<Props> = (props: Props) => (
        <div className="flex flex-col w-fit border-2 border-amber-300 rounded p-4 m-2 md:w-1/4">
            <h3 className="text-2xl font-semibold">{props.name}</h3>
            <p>{props.description}</p>
            <div className="flex pt-1">
                <CustomLink text="View Source Code" link={"https://github.com/mj3f/" + props.sourceCodeLink} />
                {props.link ? <CustomLink text="Visit" link={props.link} /> : null}
            </div>
        </div>
);

export default Project;
