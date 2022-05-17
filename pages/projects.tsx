import Layout from "../components/Layout";
import Project from "../components/Project";

export default function Projects() {
    return (
        <Layout>
            <div className="flex flex-col p-10 h-full w-full justify-start items-center dark:text-white">
                <h1 className="flex justify-start w-full text-4xl md:text-6xl font-bold">Projects</h1>
                <div id="projects" className="flex pt-10 flex-wrap">
                    <Project name="LingoBank" description="An app for language learners." sourceCodeLink="LingoBank" />
                    <Project name="Pomodoro" description="An app for keeping you productive in short bursts." sourceCodeLink="pomodoro" />
                    <Project name="MyGames" description="An app for the patient gamers who have an enormous backlog." sourceCodeLink="my-games" />
                    <Project name="FPL.NET" description="An unfinished wrapper for the Fantasy Premier League API for .NET Core." sourceCodeLink="API-FPL-NET" />
                </div>
            </div>
        </Layout>
    );
}
