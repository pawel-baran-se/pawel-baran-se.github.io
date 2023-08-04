import { useState } from "react";

type ProjectData = {
    data: IProjectData
}

const ProjectCard = ({ data }: ProjectData) => {
    const { name, gif, description, stack, href } = data;

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const nameStyle = `mt-0 mb-4 text-2xl font-bold ${isHovered ? 'text-menuHover' : ''}`;

    return (
        <div className="hover:scale-102 mb-12 duration-200"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href={href}>
                {gif && <img className="h-auto w-max" alt={name} src={gif}/>}
                <div className="py-10 px-8 bg-projectCardBg">
                    <h3 className={nameStyle}>{name}</h3>
                    <p className="whitespace-pre-line mb-10 text-aboutContext text-center md:text-left text-base leading-150">{description}</p>
                    <p className="text-right md:text-left font-light not-italic ml-16 md:ml-0 mb-3">{stack}</p>
                </div>
            </a>
        </div>)
}

export default ProjectCard;