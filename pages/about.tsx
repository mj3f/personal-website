import ContentPageLayout from "../components/ContentPageLayout";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <ContentPageLayout title="Hey, I'm Mike" showHandWave>
        <div className="flex w-full pt-5">
          <article className="flex flex-col w-full md:w-2/3">
            <p className="p-2">
              I'm a Software Engineer with over 8 years of professional
              experience, specialising in building modern, responsive and
              performant web applications with Angular/React and .NET Core. I'm
              currently working as a Software Engineer at Keoghs.
            </p>
            <p className="p-2">
              I love learning new things, from creating beautiful web UIs and
              building fast & secure APIs, to containerizing all the things and
              hacking serial ports.
            </p>
            {/* NOT READY YET: <p>I have started a technical blog where I will be documenting my learnings, you can find it <a href="">here</a>.</p> */}
            <p className="p-2">
              I started programming in 2012. In 2014 I enrolled at the
              University of Liverpool to study Computer Science, graduating in
              2017 with a first.
            </p>
            <p className="p-2">
              In my spare time you can find me chilling out with my 2 cats,
              reading books, playing video games, at the gym, watching movies
              and getting thrown around in Judo.
            </p>
          </article>
          <div className="hidden md:w-1/3 md:flex md:justify-end">
            <div className="h-96 w-96 opacity-75 bg-amber-300 rounded-full flex items-center justify-center">
              <p className="opacity-0">Nothing to see here!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-5 w-full">
          <p className="text-2xl md:text-4xl pl-2 pb-2 font-semibold text-center">
            Technical Skills
          </p>
          <div className="flex justify-evenly">
            <ul className="list-disc columns-1 md:columns-3">
              <li>C#</li>
              <li>.NET 8/10</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Angular (2+)</li>
              <li>HTML</li>
              <li>Azure cloud</li>
              <li>SQL Server/PostgreSQL/Cosmos DB</li>
              <li>Git</li>
              <li>Linux</li>
              <li>Docker</li>
              <li>CSS (+ frameworks like MUI, Tailwind)</li>
              <li>CI/CD using Github actions, Azure DevOps</li>
              <li>Terraform</li>
              <li>Android (Java)</li>
              <li>Laravel</li>
              <li>(Currently learning AWS)</li>
            </ul>
          </div>
        </div>
      </ContentPageLayout>
    </Layout>
  );
}
