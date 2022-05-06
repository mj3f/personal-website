import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Navbar() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const oldTheme = theme === "light" ? "dark" : "light";
        document.documentElement.classList.remove(oldTheme);
        document.documentElement.classList.add(theme);

        localStorage.setItem("theme", theme);

        console.log('root = ', document.documentElement.classList);
    }, [theme]);


    const anchorClass = "p-2 font-medium uppercase hover:border-b-2 border-amber-300 dark:text-white";

    let darkModeToggleButton;

    if (theme === "light") {
        darkModeToggleButton = <button onClick={() => setTheme("dark")}>
            <FontAwesomeIcon icon={faMoon} size={'1x'} />
        </button>
    } else {
        darkModeToggleButton = <button onClick={() => setTheme("light")}>
            <FontAwesomeIcon icon={faSun} size={'1x'} className="dark:text-white"/>
        </button>
    }


    return (
        <div className="flex justify-center p-2">
            <Link href="/">
                <a className={anchorClass}>Home</a>
            </Link>
            <Link href="/">
                <a className={anchorClass}>About</a>
            </Link>
            <Link href="/">
                <a className={anchorClass}>Projects</a>
            </Link>
            <Link href="/">
                <a className={anchorClass}>Contact</a>
            </Link>
            {/*<Link href="/">*/}
            {/*    <a className={anchorClass}>Photography?</a>*/}
            {/*</Link>*/}
            {darkModeToggleButton}
        </div>
    );
}
