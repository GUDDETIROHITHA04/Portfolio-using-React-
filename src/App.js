import React from 'react';
import Header from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <Header />
      <Home/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
