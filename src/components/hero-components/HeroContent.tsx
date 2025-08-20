import { useEffect, useState } from "react";

const HeroContex = () => {
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        
        setShowComponent(true);
       
    }, []);

    const headerStyleClass = `${showComponent ? 'transition-transform translate-x-0 opacity-100 ' : 'transition-transform translate-x-[100%] opacity-0'} duration-1000 ease-out whitespace-pre-line mb-8 text-3xl md:text-6xl leading-110 font-semibold`;
    const contentStyleClass = `${showComponent ? 'transition-transform translate-x-0 opacity-100 ' : 'transition-transform translate-x-[150%] opacity-0'} duration-700 ease-out delay-300 whitespace-pre-line md:text-lg leading-150`;

    return(
        <div className="min-w-[40vw] mt-5 mx-5 md:mx-0 md:mt-60 md:pt-28">
            <h1 id="HeroHook" className={headerStyleClass}>
            I'm Pawel Baran. {'\n'}
            C#/.NET Developer {'\n'}
            and Engineer {'\n'}
            <span className="opacity-50">based in Germany.</span>
            </h1>
            <p className={contentStyleClass}>
            I am a passionate software developer, {'\n'}
            eager to deliver excellent code and drive successful projects. {'\n'}
            My passion for continuous learning keeps me at the top of my game.
            </p>
            <br/>
            <p className={contentStyleClass} >
                <p className="text-red-500">
                    Thank you for stopping by! Please note that website content was last updated in February 2023, <br/>
                    and some information may no longer reflect most current work, projects, or offerings.
                </p>
            </p>
        </div>
    )
}

export default HeroContex;