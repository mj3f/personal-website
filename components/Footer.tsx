import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  const anchorClass =
    "px-2 hover:text-amber-300 dark:text-white dark:hover:text-amber-300";

  return (
    <div className="flex flex-col items-center p-2 md:flex-row md:justify-between">
      <div className="flex w-full justify-center md:justify-start">
        <p className="dark:text-white">© 2022-2024 Mike Jeffs</p>
      </div>
      <div className="flex w-full justify-center">
        <Link href="https://github.com/mj3f/" className={anchorClass}>
          <FontAwesomeIcon icon={faGithub} size={"2x"} />
        </Link>
        <Link href="https://www.linkedin.com/in/michael-jeffs-pratt-650046123/" className={anchorClass}>
          <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
        </Link>
        <Link href="mailto:mikep2319@me.com" aria-label="email" className={anchorClass}>
          <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
        </Link>
      </div>
      <div className="flex w-full justify-center md:justify-end">
        <Link href="https://github.com/mj3f/personal-website" className="font-light tex-sm dark:text-white">
          source code
        </Link>
      </div>
    </div>
  );
};

export default Footer;
