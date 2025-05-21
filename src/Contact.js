import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-left">
        <h2>Contact</h2>
        <h3>Let's stay in touch!</h3>
        <p>
          Interested in software or web development? Feel free to get in touch with me today!
        </p>
        <div className="contact-icons">
                      <a
            href="https://www.linkedin.com/in/akshithachimbili/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="https://github.com/akshitha66" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:akshithachimbili8@gmail.com">
            <FaEnvelope />
          </a>
          <a href="tel:+16822721432">
            <FaPhone />
          </a>
        </div>
        <p className="contact-email">akshithachimbili8@gmail

        </p>
      </div>

      <div className="contact-right">
        <img src="/contact-illustration.jpg" alt="Contact Illustration" />

      </div>
    </section>
  );
}

export default Contact;
