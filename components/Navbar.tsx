import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Navbar() {
    const [theme, setTheme] = useState("light");
    const router = useRouter();

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme) {
            setTheme(localTheme);
        }
    }, []);

    useEffect(() => {
        const oldTheme = theme === "light" ? "dark" : "light";
        document.documentElement.classList.remove(oldTheme);
        document.documentElement.classList.add(theme);
    }, [theme]);

    const changeTheme = (newTheme: string) => {
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme)
    };


    const anchorClass = "p-2 font-medium uppercase border-b-2 border-transparent hover:border-amber-300 dark:text-white";
    const activeAnchorClass = "p-2 font-medium uppercase border-b-2 border-amber-300 dark:text-white";

    let darkModeToggleButton;

    if (theme === "light") {
        darkModeToggleButton = <button className="pl-2" onClick={() => changeTheme("dark")}>
            <FontAwesomeIcon icon={faMoon} size={'1x'} />
        </button>
    } else {
        darkModeToggleButton = <button className="pl-2" onClick={() => changeTheme("light")}>
            <FontAwesomeIcon icon={faSun} size={'1x'} className="dark:text-white"/>
        </button>
    }


    return (
        <div className="flex flex-row w-full justify-center items-center p-2">
            <Link href="/" className={router.pathname === "/" ? activeAnchorClass : anchorClass}>
                Home
            </Link>
            <Link href="/about" className={router.pathname === "/about" ? activeAnchorClass : anchorClass}>
                About
            </Link>
            <Link href="/projects" className={router.pathname === "/projects" ? activeAnchorClass : anchorClass}>
                Projects
            </Link>
            {darkModeToggleButton}
        </div>
    );
}
