import './app.scss';
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages Imports
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Technologies from "./components/technologies/Technologies";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import ProjectPage from './components/projectPage/ProjectPage';
import BarLoader from "react-spinners/BarLoader";

// Context Imports
import { ShowTopbarContext } from "./context/ShowTopbarContext";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  // Hide topbar when scrolling down
  const setShowTopbar = useContext(ShowTopbarContext);
  const controlNavbar = () => {
    if (window.screenY > 100) {
      setShowTopbar(false);
    } else {
      setShowTopbar(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  })


  return (

    <div className="app" >
      {
        loading ? (

          <><h2 style={{ margin: 20, fontSize: 60, fontFamily: 'poppins', fontWeight: '200' }}>Mourany.</h2>
            <BarLoader
              color={'#43FFD5'}
              loading={loading}
              width={200}
              height={6} />
          </>
        ) : (
          <>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <BrowserRouter>
              <Routes>
                <Route path={"/"} element={
                  <div className="sections">
                    <Intro />
                    <About />
                    <Technologies />
                    <Portfolio />
                    <Contact />
                  </div>
                } />
                <Route path={"/ProjectPage"} element={<ProjectPage />} />

              </Routes>



            </BrowserRouter>


          </>
        )}
    </div >
  );
}

export default App;