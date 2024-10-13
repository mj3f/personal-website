import ContentPageLayout from "../components/ContentPageLayout";
import Layout from "../components/Layout";
import Project from "../components/Project";

export default function Projects() {
    return (
        <Layout>
            <ContentPageLayout title="Projects">
                <div id="projects" className="flex pt-10 flex-wrap">
                    <Project name="LingoBank" description="An app for language learners." sourceCodeLink="LingoBank" />
                    <Project name="Pomodoro" description="An app for keeping you productive in short bursts." sourceCodeLink="pomodoro" />
                    <Project name="MyGames" description="An app for the patient gamers who have an enormous backlog." sourceCodeLink="my-games" />
                    <Project name="FPL.NET" description="An unfinished wrapper for the Fantasy Premier League API for .NET Core." sourceCodeLink="API-FPL-NET" />
                    <Project
                        name="FPL Mini League data fetcher"
                        description="A python script to fetch all 38 gameweeks of data for a mini league, and a react app to show that data in line chart(s)"
                        sourceCodeLink="fpl-mini"
                    />
                </div>
            </ContentPageLayout>
        </Layout>
    );
}
