
const AllProjects = () => {

    const github = "https://github.com/pawel-baran-se?tab=repositories";

    return (<div className="flex h-56 justify-center items-center">
        <a href={github} className="uppercase px-8 py-6 border-2 border-allProjectsButtonBorder text-lg font-bold no-underline hover:bg-allProjectsButtonBorder hover:scale-95 duration-200">view all projects</a>
    </div>)
}

export default AllProjects;