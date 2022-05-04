import Link from "next/link";

export default function Navbar() {
    const anchorClass = "p-2 font-medium uppercase hover:border-b-2 border-yellow-300";

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
            <Link href="/">
                <a className={anchorClass}>Photography?</a>
            </Link>
        </div>
    );
}
