import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const iconClass = 'p-2 hover:text-green-500';

    return (
        <div className="flex flex-col justify-center items-center my-5">
            <div className="flex flex-row">
                <a href="https://www.linkedin.com/in/michael-pratt-650046123" className={iconClass}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.github.com/mikesjp" className={iconClass}>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.gitlab.com/msjp" className={iconClass}>
                    <FontAwesomeIcon icon={faGitlab} />
                </a>
                <a href="mailto:me@mikesjp.com" className={iconClass}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
            <div className="flex flex-row">
                <a href="https://www.msjp.dev" className="hover:text-green-500">
                    &#169; 2020 Mike Pratt
                </a>
            </div>
        </div>
    );
}

export default Footer;