import { useState } from 'react';
import Image from '../../assets/Menu-Icon.svg';
import NavLink from './NavLink';

const PopMenu = () => {
    const [isPopup, setIsPopup] = useState(false);
    

    const toggleMenu = () => {
        setIsPopup(!isPopup)
    }

    return <div className="justify-end align-center gap-1 md:hidden">
        <button onClick={toggleMenu}>
            <img src={Image}
                alt='logo' 
                width='Auto' 
                height='Auto'
                className='mx-1 flex justify-end'/>
        </button>
        {isPopup && (
            <div className='bg-popUpMenuBg absolute mt-5 inset-x-0' onClick={toggleMenu}>
                <NavLink part='About'/>
                <NavLink part='Projects'/>
                <NavLink part='Contact' isContact={true}/>
            </div>
        )}
    </div>
}

export default PopMenu;