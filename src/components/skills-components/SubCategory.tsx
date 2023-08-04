import { v4 as uuidv4 } from 'uuid';

type SubCategoryProp = {
    category: string,
    img?: string,
    skills: string[]
}

const SubCategory = (props: SubCategoryProp) => {
    const { category, img, skills } = props;

    const imgStyle = "mb-6 h-20 mt-5 md:mt-0 hover:scale-110 duration-200";
    const headerStyle = "mt-0 mb-4 text-xl leading-150 font-bold";

    return (<div className="md:w-1/3">
        {img && (
            <img alt={category} src={img} className={imgStyle} style={{transformStyle: "preserve-3d"}}/>
        )}
        <h3 className={headerStyle}>{category}</h3>
        <ul>
            {skills.map((skill) => {
                return <li key={uuidv4()} className="text-aboutContext text-base leading-150">{skill}</li>
            })}
        </ul>
    </div>)
}

export default SubCategory;