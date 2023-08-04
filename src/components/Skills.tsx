import SkillsIntro from "./skills-components/SkillsIntro";
import SubCategory from "./skills-components/SubCategory";


const Skills = () => {

    const technologiesList: string[] = ['c#', '.NET Core', 'Git', 'ASP.NET API', 'SQL', 'RSET API', 'HTTP', 'Typescript', 'REACT', 'MongoDb', 'Docker']; 
    const softwareList: string[] = ['Visual Studio', 'VS Code', 'Fork', 'RFEM Dlubal', 'SJ Mepla', 'Rhinoceros + Grasshopper', 'Autocad', 'Mathcad', 'SMath', 'Jira']; 
    const languagesList: string[] = ['Polish - Native', 'English - Advanced', 'German - Upper Intermediate']; 

    return (<div id="Skills" className="w-screen bg-black flex flex-col inset-0 px-8 md:px-16 pr-12 pb-28">
        <div className="flex flex-col md:flex-row gap-x-10">
            <div className="md:w-1/3">
                <SkillsIntro />
            </div>
            <div className="md:w-2/3 flex flex-col md:flex-row">
                <SubCategory category='Technologies' img='/assets/coding-web.png' skills={technologiesList}/>
                <SubCategory category='Software' img='/assets/Software-web.png' skills={softwareList}/>
                <SubCategory category='Languages' img='/assets/Languages-web.png' skills={languagesList}/>
            </div>
        </div>
        {/* <div className="flex flex-col md:flex-row gap-x-10">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3 flex flex-col md:flex-row">
                <SubCategory category='Technologies' skills={technologiesList}/>
            </div>
        </div> */}
    </div>)
}

export default Skills;