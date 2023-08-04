import Image from '../assets/Pawel-Baran-sign.jpg';

const Contact = () => {

    return (
        <div id="Contact" className='bg-black flex flex-col px-16 py-20'>
            <div className="mb-28 mt-52">
                <p id='ContactHook' className="mb-2 text-aboutInlineHeader text-base leading-150 font-bold">CONTACT</p>
                <div className='flex flex-col justify-center items-center'>
                    <img alt='Pawel Baran' src={Image} className='max-w-lg'/>
                    <a onClick={() => {
                        window.location.href = 'mailto:pawelbaranc@gmail.com';
                    }}
                     className='h-14 text-2xl text-aboutContext'>
                        ✉ pawelbaranc@gmail.com
                    </a>
                    <div className='flex flex-row'>
                        <a className='min-h-[100%] w-16 h-16 bg-linkedinBg bg-contain bg-no-repeat mr-3' href="https://www.linkedin.com/in/pawel-baran-engineering/" target="_blank"></a>
                        <a className='min-h-[100%] w-16 h-16 bg-githubBg bg-contain bg-no-repeat' href="https://github.com/pawel-baran-se" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;