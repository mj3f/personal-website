import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
        <div className="flex h-full items-center">
            <h1 className="text-4xl text-blue-600 font-semibold">
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
        </div>
    </Layout>
  );
}
