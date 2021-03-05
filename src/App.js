import './App.css';

import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
