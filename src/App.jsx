import './app.scss';
import { useState } from 'react';
import {
  Animator,
  ScrollContainer,
  MoveOut,
  Fade,
  batch,
  ScrollPage,
  Sticky,
  Zoom
} from 'react-scroll-motion';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Technologies from "./components/technologies/Technologies";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app" >
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
      </div>
    </div >
  );

}

export default App;
