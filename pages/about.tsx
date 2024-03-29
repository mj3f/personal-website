import Layout from "../components/Layout";
import Image from "next/image";

export default function About() {
    return (
        <Layout>
            <div className="flex flex-col p-10 h-full w-full justify-start items-center dark:text-white">
                <h1 className="flex justify-start w-full text-4xl md:text-6xl font-bold">Hey, I'm Mike <span className="animate-waving-hand">👋</span></h1>
                <div className="flex pt-5">
                    <article className="flex flex-col w-full md:w-2/3">
                        <p className="p-2">I am a Software Engineer with over 5 years of professional experience, specialising in 
                            building modern, responsive and performant web applications with Angular/React and .NET Core.
                            I'm currently working as a Software Engineer at Keoghs.
                        </p>
                        <p className="p-2">
                            I love learning new things,
                            from creating beautiful web and mobile UIs and building lean and mean APIs, to containerizing all the things
                            and hacking serial ports. I am currently expanding my knowledge of Kubernetes and microservices.
                        </p>
                        <p className="p-2">I started programming in 2012. In 2014 I enrolled at the University of Liverpool to study Computer Science,
                            graduating in 2017 with a first.
                        </p>
                        <p className="p-2">In my spare time I like to read books, play video games, cycling, watch Football and Formula 1.</p>
                    </article>
                    <div className="hidden md:w-1/3 md:flex md:justify-end">
                        <div className="h-96 w-96 opacity-75 bg-amber-300 rounded-full flex items-center justify-center">
                            <p className="opacity-0">Nothing to see here!</p>
                        </div>
                    </div>
                </div>
                <section className="flex flex-col pt-5 w-full">
                    <p className="text-2xl md:text-4xl pl-2 pb-2 font-semibold text-center">Skills</p>
                    <div className="flex justify-evenly">
                        <ul className="list-disc columns-3">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>CSS Frameworks (Boostrap & Tailwind)</li>
                            <li>JavaScript/TypeScript</li>
                            <li>Angular (2+)</li>
                            <li>React</li>
                            <li>C# .NET Core/ASP.NET Core</li>
                            <li>SQL Server</li>
                            <li>MySQL/MariaDB</li>
                            <li>Git</li>
                            <li>Linux</li>
                            <li>Docker</li>
                            <li>Azure cloud</li>
                            <li>CI/CD using Github actions, Gitlab, Jenkins</li>
                            <li>Kubernetes</li>
                            <li className="opacity-50">Android (Java)</li>
                            <li className="opacity-50">iOS (Swift)</li>
                            <li className="opacity-50">Laravel</li>
                        </ul>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
