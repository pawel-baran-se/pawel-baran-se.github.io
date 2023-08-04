import { useState, useEffect, createContext, useRef } from 'react';

type ScrollState = {
    activeComponent: string;
};

interface ScrollContextProviderProps {
    children: React.ReactNode;
}

const ScrollContext = createContext<ScrollState | null>(null);

const ScrollContextProvider: React.FC<ScrollContextProviderProps> = ({ children }) => {
    const [activeComponent, setActiveComponent] = useState('');
   

    const actComponent: ScrollState = {
        activeComponent,
    };
    

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveComponent(entry.target.id);
          }
          
        });
    };
    
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(handleIntersection, {
            root: null, 
            rootMargin: '0px', 
            threshold: 1.0, 
        });
        //console.log(activeComponent);

        return(() => {
            if (observer.current) {
                observer.current.disconnect();
            }
        })
    }, []);

    useEffect(() => {
        const components = [document.getElementById('AboutHook'), 
                            document.getElementById('ProjectsHook'), 
                            document.getElementById('ContactHook'),
                            document.getElementById('HeroHook')];
        if (observer.current) {
          components.forEach((element) => observer.current!.observe(element!));
        }
        //console.log(components);
    }, []);


    return <ScrollContext.Provider value={actComponent}>{children}</ScrollContext.Provider>
};

export { ScrollContext, ScrollContextProvider };