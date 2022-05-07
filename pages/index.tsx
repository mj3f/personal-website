import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
        <div className="flex h-full justify-center items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl sm:text-8xl text-amber-300 font-bold">
                    Mike Pratt
                </h1>
                <h2 className="text-2xl font-semibold dark:text-white">Fullstack Software Engineer</h2>
                <h3 className="font-light dark:text-white">Read more{" "}
                    <Link href="/about">
                        <a className="px-1 pb-1 bg-green-300 hover:bg-white hover:border-b-2 border-amber-300 dark:text-white dark:bg-rose-500 dark:hover:bg-slate-800">about me</a>
                    </Link>
                </h3>
            </div>
        </div>
    </Layout>
  );
}
