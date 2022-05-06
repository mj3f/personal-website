import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
    const anchorClass = "px-2 hover:text-amber-300 dark:hover:text-amber-300"; // FIXME: hover in dark mode not working

    return (
        <div className="flex flex-col items-center p-2 md:flex-row md:justify-between">
            <div className="flex w-full justify-center md:justify-start">
                <p className="dark:text-white">© 2022 - Mike Pratt</p>
            </div>
            <div className="flex w-full justify-center">
                <Link href="https://github.com/mj3f/">
                    <a className={anchorClass}><FontAwesomeIcon icon={faGithub} size={'2x'} className="dark:text-white"/></a>
                </Link>
                <Link href="https://twitter.com/mikej3f/">
                    <a className={anchorClass}><FontAwesomeIcon icon={faTwitter} size={'2x'} className="dark:text-white"/></a>
                </Link>
                <Link href="https://www.linkedin.com/in/michael-pratt-650046123/">
                    <a className={anchorClass}><FontAwesomeIcon icon={faLinkedin} size={'2x'} className="dark:text-white"/></a>
                </Link>
            </div>
            <div className="flex w-full justify-center md:justify-end">
                <Link href="https://github.com/mj3f/personal-website"><a className="font-light tex-sm dark:text-white">source code</a></Link>
            </div>
        </div>
    );
};

export default Footer;
