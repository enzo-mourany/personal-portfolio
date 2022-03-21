import './app.scss';
import React from 'react';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Technologies from "./components/technologies/Technologies";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div className="App" >
      <Topbar />
      <div className="sections">
        <Intro />
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );

}

export default App;
