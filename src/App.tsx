import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { ScrollContextProvider } from './utils/ScrollContext'

function App() {
  
  return (
    <>
      <ScrollContextProvider>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </ScrollContextProvider>
    </>
  )
}

export default App
