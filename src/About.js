import './About.css';
import { FaCheckCircle } from 'react-icons/fa';

function About() {
  return (
    <section className="about-section" id="about">
          <div className="about-left">
        <h2>About</h2>
        <div className="section-underline"></div>  {/* This is new */}
        <p className="about-subtitle">
          Innovative Full Stack Developer | Passionate about clean code, continuous learning, and building cloud-native apps.
        </p>
        <img src={process.env.PUBLIC_URL + "/about-illustration.png"} alt="Developer Illustration" />
      </div>
      <div className="about-right">
        <ul>
          <li><FaCheckCircle /> Software Engineer with 5.5+ years of experience designing scalable apps for finance, insurance, and e-commerce.</li>
          <li><FaCheckCircle /> Skilled in React.js, Spring Boot, Node.js, JavaScript & REST APIs. Focus on clean architecture and modular design.</li>
          <li><FaCheckCircle /> Developed responsive frontends (KYC, loans, fund transfers) with React + Redux + Bootstrap.</li>
          <li><FaCheckCircle /> Built secure platforms with JWT auth, Stripe integration, admin dashboards, PostgreSQL/MongoDB, and audit trails.</li>
          <li><FaCheckCircle /> Experience with AWS (EC2, S3, RDS), CI/CD (GitHub Actions, Jenkins), Docker, and automated deployment flows.</li>
          <li><FaCheckCircle /> Onsite delivery at ABN AMRO, Netherlands — working directly with stakeholders for a critical migration phase.</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
