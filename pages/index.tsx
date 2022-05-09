import Layout from "../components/Layout";
import Link from "next/link";
import CustomLink from "../components/CustomLink";

export default function Home() {
  return (
    <Layout>
        <div className="flex h-full justify-center items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl sm:text-8xl text-amber-300 font-bold">
                    Mike Pratt
                </h1>
                <h2 className="pt-2 text-2xl font-semibold dark:text-white">Fullstack Software Engineer</h2>
                <h3 className="font-light dark:text-white">Read more{" "}
                    <CustomLink text="about me" link="/about" />
                </h3>
            </div>
        </div>
    </Layout>
  );
}
