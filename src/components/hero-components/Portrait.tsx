import { useEffect, useState } from "react";

const Portrait = () => {
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        setShowComponent(true);
    }, []);

    const portraitStyleClass = `${showComponent ? 'transition-transform translate-x-0 opacity-100 opacity-100 duration-1000 ease-out' : 'transition-transform translate-x-[-100%] opacity-0 duration-1000 ease-out'} min-h-[50%] mt-40 md:mt-20 bg-center md:min-w-[40vw] md:h-[80vh] bg-heroBackground bg-contain bg-no-repeat mx-5 md:mx-0`;

    return (
        <div className={portraitStyleClass}>
        </div>
    )
}

export default Portrait;