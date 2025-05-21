import { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Experience from './Experience';
import Education from './Education';

function App() {
  useEffect(() => {
    // Clear any URL hash fragment
    window.history.replaceState(null, '', window.location.pathname);

    // Scroll to hero section (top)
    const topSection = document.getElementById('top');
    if (topSection) {
      topSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />

      <header className="hero-section" id="top">
        <div className="hero-container">
          <h1>Hi, my name is</h1>
          <h2 className="hero-name">Akshitha Chimbili</h2>
          <p className="hero-summary">
            I’m a full-stack developer with 5.5 years of experience in building scalable, cloud-native applications using React, Node.js, and Spring Boot. I enjoy solving real-world challenges by turning complex ideas into intuitive, high-performing digital products. I believe in writing clean, efficient code that delivers real value.
          </p>
          <a href="#contact" className="hero-button">Let’s connect!</a>
          <p className="contact-link"><a href="#contact">Contact Me</a></p>
        </div>
      </header>

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
