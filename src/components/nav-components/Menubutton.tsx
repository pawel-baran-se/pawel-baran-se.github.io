
type ButtonProperties = {
    isActive: boolean,
    part: string,
    isContact?: boolean,
}

const Menubutton = (props: ButtonProperties) => {
    const {isActive, part, isContact} = props;
    const link: string = "#" + part;
    
    const buttonClass = `py-7 px-7 text-lg font-medium ${isActive ? 'text-blue-800' : ''} ${!isContact ? 'hover:text-menuHover' : ''} ${isContact ? 'text-white bg-gray-500 hover:bg-contactMenuHover' : 'text-white text-opacity-60'} duration-200`;

    return <a 
            href={link}
            className={buttonClass}
            style={{fontFamily: "Poppins, sans-serif"}}>
        {part}
    </a>
}

export default Menubutton;