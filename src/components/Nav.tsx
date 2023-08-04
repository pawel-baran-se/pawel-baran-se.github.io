import Logo from './nav-components/Logo'
import Menu from './nav-components/Menu';
import PopMenu from './nav-components/PopMenu';

const Nav = () => {

    return (
        <nav className='w-screen px-20 fixed z-50 inset-x-0 top-0 bg-black flex justify-between h-20 items-center '>
            <Logo />
            <Menu />
            <PopMenu />
        </nav>
    )
}

export default Nav;