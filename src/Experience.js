import './Experience.css';
import { FaAngleRight } from 'react-icons/fa';

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>

      {/* ABN AMRO */}
      <div className="exp-card">
        <div className="exp-header">
          <img src="/abn-amro-logo.png" alt="ABN AMRO Logo" />
          <div>
            <h3>Capgemini – Software Engineer</h3>
            <p>Client: ABN AMRO Bank | Sep 2017 – Oct 2021</p>
          </div>
        </div>
          <ul>
          <li><FaAngleRight /> Developed 50+ dynamic, responsive banking forms for KYC, loans, and fund transfers using React.js, Redux, HTML/CSS, and Backbase tools.</li>
          <li><FaAngleRight /> Led a team of 4 developers to deliver core onboarding forms, managed sprint planning, and reviewed PRs to ensure quality delivery.</li>
          <li><FaAngleRight /> Coordinated directly with ABN AMRO’s onshore team during a 3-month onsite engagement in Amsterdam, understanding business workflows and finalizing requirements.</li>
          <li><FaAngleRight /> Created reusable components and integrated them with backend REST APIs to streamline data flow and reduce code redundancy.</li>
          <li><FaAngleRight /> Collaborated with testing and UAT teams, resolved QA bugs, and ensured timely releases across dev, test, and prod environments.</li>
          <li><FaAngleRight /> Tech Stack: React.js, Redux, HTML5, CSS3, Backbase, Bitbucket, Jenkins, JIRA, Agile/Scrum</li>
        </ul>
      </div>

      {/* Swiss RE / Assentis */}
      <div className="exp-card">
        <div className="exp-header">
          <img src="/swiss-re-logo.png" alt="Swiss RE Logo" />
          <div>
            <h3>Swiss RE – Template Developer</h3>
            <p>Jan 2016 – Aug 2017</p>
          </div>
        </div>
          <ul>
            <li><FaAngleRight /> Independently built and maintained 25+ document templates for client policy statements, billing notices, and financial summaries using XML and XSLT.</li>
            <li><FaAngleRight /> Applied complex business logic and formatting rules within Assentis DocDesign to dynamically render multilingual and region-specific outputs.</li>
            <li><FaAngleRight /> Coordinated closely with QA and business analysts to ensure every document matched legal, branding, and compliance guidelines.</li>
            <li><FaAngleRight /> Delivered multiple high-priority templates under tight deadlines with minimal supervision, demonstrating strong ownership and precision.</li>
            <li><FaAngleRight /> Integrated templates with Oracle DB data sources and used UltraEdit to debug and validate logic flow in real-time.</li>
            <li><FaAngleRight /> Tech Stack: XML, XSLT, JavaScript, Assentis DocDesign, UltraEdit, Oracle DB</li>
          </ul>
      </div>
    </section>
  );
}

export default Experience;
