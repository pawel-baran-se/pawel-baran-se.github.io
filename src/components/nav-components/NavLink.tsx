
type LinkProperties = {
    part: string,
    isContact?: boolean,
}

const NavLink = (props: LinkProperties) => {
    const { part, isContact } = props;
    
    const link: string = "#" + part;

    const linkClass = `block px-6 py-8 text-base m-auto no-underline font-medium text-start border-b border-white border-opacity-25 ${!isContact ? 'hover:text-menuHover' : ''} ${isContact ? 'text-white bg-gray-500 hover:bg-contactMenuHover' : 'text-white text-opacity-60'}`;

    return <div className="">
        <a
            href={link}
            className={linkClass}
        >{part}</a>
    </div>
}

export default NavLink;