import Layout from "../components/Layout";
import Image from "next/image";

export default function About() {
    return (
        <Layout>
            <div className="flex flex-col p-10 h-full w-full justify-start items-center dark:text-white">
                <h1 className="flex justify-start w-full text-4xl md:text-6xl font-bold">Hey, I'm Mike 👋</h1>
                <div className="flex pt-5">
                    <article className="flex flex-col md:w-2/3">
                        <p className="p-2">I am a Software Engineer based in Wirral, UK. I have over 5 years of professional experience, currently
                            focusing on building modern, responsive and performant web applications with Angular/React and .NET Core.
                            I love learning new things, and have accumulated knowledge in all aspects of software engineering.
                            From creating beautiful web and mobile UIs and building lean and mean APIs, to containerizing all the things
                            and hacking serial ports. I am currently getting to grips with Kubernetes and cyber-security.
                        </p>
                        <p className="p-2">I started programming in 2012. In 2014 I enrolled at the University of Liverpool to study a Bachelors in Computer Science,
                            graduating in 2017 with first class honours.
                        </p>
                        <p className="p-2">In my spare time I like to read science fiction, play video games, cycle, dabble in amateur photography,
                            distro hop (far too much), watching Football and Formula 1.</p>
                    </article>
                    <div className="md:w-1/3">
                        <Image src="/memoji.png" alt="cartoon picture of my head exploding" layout="responsive" height={50} width={50} className="bg-amber-300 rounded-full" />
                    </div>
                </div>
                <section className="flex flex-col pt-5 w-full">
                    <p className="text-2xl md:text-4xl pl-2 pb-2 font-semibold">Skills</p>
                    <div className="flex justify-evenly">
                        <ul className="list-disc">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript/TypeScript</li>
                            <li>Angular (2+)</li>
                            <li>React</li>
                            <li>Next.js</li>
                        </ul>
                        <ul className="list-disc">
                            <li>C# .NET Core/ASP.NET Core</li>
                            <li>SQL Server</li>
                            <li>MySQL/MariaDB</li>
                            <li className="opacity-50">Android (Java)</li>
                            <li className="opacity-50">iOS (Swift)</li>
                            <li className="opacity-50">Laravel</li>
                        </ul>
                        <ul className="list-disc">
                            <li>Git</li>
                            <li>Linux (Debian/Red Hat distribution)</li>
                            <li>Docker/Podman</li>
                            <li>Azure cloud</li>
                            <li>CI/CD using Github actions, Gitlab, Jenkins</li>
                            <li>Kubernetes</li>
                        </ul>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
