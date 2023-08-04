import Image from '../../../src/assets/Pawel-Baran-sign.jpg';

const Logo = () => {

    return (
    <a href='' className='w-52 h-auto'>
        <img src={Image}
            alt='logo' 
            width='Auto' 
            height='Auto'
            className='mx-1 flex justify-start'/>
    </a>)
}

export default Logo;


