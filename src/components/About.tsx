import AboutContext from "./about-components/AboutContext";
import AboutHeader from "./about-components/AboutHeader";

const About = () => {

    return (<div id="About" className="w-screen bg-black flex flex-col inset-0 pt-48 px-8 md:px-16 pb-32">
        <AboutHeader/>
        <AboutContext />
    </div>)
}

export default About;