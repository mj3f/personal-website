import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const iconClass = 'p-2 hover:text-green-500';

    return (
        <div className="flex flex-row justify-center items-center my-5">
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
    );
}

export default Footer;