import './Skills.css';
import { FaCheckCircle } from 'react-icons/fa';

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-left">
        <h2>Skills</h2>
        <div className="skills-grid">
          <ul>
            <li><FaCheckCircle /> Java</li>
            <li><FaCheckCircle /> JavaScript</li>
            <li><FaCheckCircle /> React.js</li>
            <li><FaCheckCircle /> Next.js</li>
            <li><FaCheckCircle /> Spring Boot</li>
            <li><FaCheckCircle /> Node.js</li>
            <li><FaCheckCircle /> Express.js</li>
            <li><FaCheckCircle /> Python</li>
          </ul>

          <ul>
            <li><FaCheckCircle /> PostgreSQL</li>
            <li><FaCheckCircle /> MongoDB</li>
            <li><FaCheckCircle /> MySQL</li>
            <li><FaCheckCircle /> Redis</li>
            <li><FaCheckCircle /> REST APIs</li>
            <li><FaCheckCircle /> JWT Auth</li>
            <li><FaCheckCircle /> Stripe Integration</li>
          </ul>

          <ul>
            <li><FaCheckCircle /> AWS (EC2, S3)</li>
            <li><FaCheckCircle /> Git & GitHub</li>
            <li><FaCheckCircle /> GitHub Actions</li>
            <li><FaCheckCircle /> CI/CD</li>
            <li><FaCheckCircle /> Postman</li>
            <li><FaCheckCircle /> Chrome DevTools</li>
            <li><FaCheckCircle /> Agile & Scrum</li>
            <li><FaCheckCircle /> JIRA / Confluence</li>
          </ul>
        </div>
      </div>

      <div className="skills-right">
        <img src={process.env.PUBLIC_URL + "/skills-illustration.png"} alt="Skills Illustration" />

      </div>
    </section>
  );
}

export default Skills;
