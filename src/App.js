import './App.css';

import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <AboutMe />
    </div>
  );
}

export default App;
