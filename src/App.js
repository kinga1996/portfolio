import './App.css';

import LoaderDiv from "./components/LoaderDiv"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <div className="App">
      <LoaderDiv />
      <Banner />
      <Navbar />
      <AboutMe id="des-about"/>
      <Projects id="des-projects"/>
      <Skills id="des-skills"/>
      <Contact id="des-contact"/>
    </div>
  );
}

export default App;

//co umiem!