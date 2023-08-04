import HeroContex from "./hero-components/HeroContent";
import Portrait from "./hero-components/Portrait";

const Hero = () => {

    return (<div id="Hero" className="w-screen h-[90vh] bg-black flex flex-col md:flex-row justify-center inset-0">
        <Portrait />
        <HeroContex />
    </div>)
}

export default Hero;