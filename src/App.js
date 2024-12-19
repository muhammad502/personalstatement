
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact'
import NavBar from './components/navbar/navbar';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portofio';
import About from './pages/About/About';
import Footer from './components/footer/footer';
import Error from './pages/Error/Error';

const App = () => {
  return (
    
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="*" element={<Error/>}/>
      </Routes> 
      <Footer/>
    </Router>
  );
};

export default App;
