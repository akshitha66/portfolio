import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/Akshitha_Chimbili_Resume.pdf" download className="resume-button">View Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
