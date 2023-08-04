import ProjectsHeader from "./projects-components/ProjectsHeader";
import projectsData from '../Data/projects.json';
import ProjectCard from "./projects-components/ProjectCard";
import AllProjects from "./projects-components/AllProjects";

const Projects = () => {

    const projects: IProjectData[] = projectsData.projects;

    return (
    <div id="Projects" className="w-screen bg-black flex flex-col md:flex-row justify-center inset-0 px-16 py-32 gap-x-6 gap-y-4">
        <div className="md:w-1/2">
            <ProjectsHeader />
            <ProjectCard data={projects[0]} />
            <ProjectCard data={projects[1]} />
        </div>
        <div className="md:w-1/2">
            <ProjectCard data={projects[2]} />
            <ProjectCard data={projects[3]} />
            <ProjectCard data={projects[4]} />
            <AllProjects />
        </div>
    </div>)
}

export default Projects;