import './Education.css';
import { FaCheckCircle } from 'react-icons/fa';

function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>

      <div className="education-container">
        <div className="education-left">
          <h3>George Mason University, Fairfax, VA | Aug 2023 – May 2025</h3>
          <p><strong>Master of Science in Information Systems</strong></p>
          <p><strong>GPA:</strong> 3.7 / 4.0</p>

          <ul>
            <li><FaCheckCircle /> Core Coursework: Mathematical Foundations of Computing, Database Systems, Big Data Analytics, Rapid Prototyping, Systems Analysis & Design.</li>
            <li><FaCheckCircle /> Relevant Electives: Data Structures & Algorithms, Cloud Computing Security, Cybersecurity Fundamentals, Systems Programming, Software Engineering for Web, UI/UX Design.</li>
            <li><FaCheckCircle /> Participated in live cloud deployment and backend systems design for vehicle rental and dashboard projects using AWS, React, Spring Boot, and MongoDB.</li>
            <li><FaCheckCircle /> Emphasized hands-on implementation, REST APIs, version control, and DevOps pipelines in capstone courses and academic projects.</li>
          </ul>
        </div>

        <div className="education-right">
          <img src="/education.png" alt="Education Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Education;
