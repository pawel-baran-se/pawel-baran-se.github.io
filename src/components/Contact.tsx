import Image from '../../src/assets/Pawel-Baran-sign.jpg';

const Contact = () => {

    return (
        <div id="Contact" className='w-screen bg-black flex flex-col px-8 md:px-16 py-20'>
            <div className="mb-28 mt-52">
                <p id='ContactHook' className="mb-2 text-aboutInlineHeader text-base leading-150 font-bold">CONTACT</p>
                <div className='flex flex-col justify-center items-center mt-8 md:mt-0'>
                    <img alt='Pawel Baran' src={Image} className='min-h-[50%] md:max-w-lg'/>
                    <a onClick={() => {
                        window.location.href = 'mailto:pawelbaranc@gmail.com';
                    }}
                     className='h-7 mb-3 md:mb-0 md:h-14 md:text-2xl text-aboutContext'>
                        ✉ pawelbaranc@gmail.com
                    </a>
                    <div className='flex flex-row'>
                        <a className='min-h-[100%] w-6 h-8 md:w-16 md:h-16 bg-linkedinBg bg-contain bg-no-repeat mr-3' href="https://www.linkedin.com/in/pawel-baran-engineering/" target="_blank"></a>
                        <a className='min-h-[100%] w-6 h-8 md:w-16 md:h-16 bg-githubBg bg-contain bg-no-repeat' href="https://github.com/pawel-baran-se" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;