import './App.css';

import LoaderDiv from "./components/LoaderDiv"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <div className="App">
      <LoaderDiv />
      <Banner />
      <Navbar />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
