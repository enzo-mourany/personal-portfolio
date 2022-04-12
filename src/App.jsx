import './app.scss';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Technologies from "./components/technologies/Technologies";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Navbar from './components/navbar/Navbar';
import Project from "./components/project/Project";
import BarLoader from "react-spinners/BarLoader";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (

    <div className="app" >
      {
        loading ? (

          <><h2 style={{ margin: 20, fontSize: 60, fontFamily: 'poppins', fontWeight: '200' }}>Mourany.</h2>
            <BarLoader
              color={'#43FFD5'}
              loading={loading}
              width={200}
              height={6} /></>
        ) : (

          <><Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            {/* <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> */}
            <div className="sections">
              <Intro />
              <About />
              <Technologies />
              <Portfolio />
              <Contact />
            </div></>
        )}
    </div >
  );
}

export default App;


// TODO: Add little bar right side = pages progression