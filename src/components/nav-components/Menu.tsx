import { useContext } from "react";
import Menubutton from "./Menubutton";
import { ScrollContext } from "../../utils/ScrollContext";

const Menu = () => {
    const scrollContext = useContext(ScrollContext);
    const activeComponent = scrollContext?.activeComponent;
    
    return <div className="justify-end align-center gap-1 hidden md:block">
        <Menubutton isActive={activeComponent === 'AboutHook' ? true : false} part="About" />
        <Menubutton isActive={activeComponent === 'ProjectsHook' ? true : false} part="Projects" />
        <Menubutton isActive={activeComponent === 'ContactHook' ? true : false} part="Contact" isContact={true}/>
    </div>
}

export default Menu;