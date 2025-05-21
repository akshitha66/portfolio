import './Projects.css';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      {/* Project 1 */}
      <div className="project-container">
        <div className="project-image">
          <img src="/vehicle.png" alt="Online Vehicle Rental Platform" />
        </div>
        <div className="project-details">
          <h3>Online Vehicle Rental Platform</h3>
          <p>
            A full-stack car/bike rental platform that supports user registration, JWT-based login, real-time booking, and Stripe payments. Admin can manage listings, availability, and transactions.
          </p>
          <p><strong>Tech Stack:</strong> React, Node.js, Express, PostgreSQL, JWT, Stripe</p>
          <div className="project-links">
            <a href="https://github.com/akshitha66/vehicle-rental" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-container reverse">
        <div className="project-image">
          <img src="/loyalty.png" alt="Customer Loyalty Program" />
        </div>
        <div className="project-details">
          <h3>Customer Loyalty Program</h3>
          <p>
            Built a Java-based reward system with customer registration, transaction tracking, and reward redemption. Included mobile Kotlin frontend and server APIs for dynamic rule updates.
          </p>
          <p><strong>Tech Stack:</strong> Java, JSP/Servlets, Oracle DB, REST APIs, Kotlin</p>
          <div className="project-links">
            <a href="https://github.com/akshitha66/Customer-Loyalty-Program-System-" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-container">
        <div className="project-image">
          <img src="/retail.png" alt="Retail Pricing Dashboard" />
        </div>
        <div className="project-details">
          <h3>Retail Pricing Dashboard</h3>
          <p>
            A real-time dashboard to automate pricing rules, analyze product visibility, and monitor inventory. Integrated MySQL backend and React frontend with dynamic charting.
          </p>
          <p><strong>Tech Stack:</strong> React, MySQL, Node.js, Chart.js</p>
          <div className="project-links">
            <a href="https://github.com/akshitha66/retail-dashboard" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project-container reverse">
        <div className="project-image">
          <img src="/placefinder.png" alt="Place Finder" />
        </div>
        <div className="project-details">
          <h3>Place Finder</h3>
          <p>
            An Airbnb-style property listing app built with dynamic filters, secure authentication, listing creation, and bookings. Designed to offer responsive experience across devices.
          </p>
          <p><strong>Tech Stack:</strong> Next.js, TypeScript, MongoDB, Tailwind CSS, Prisma</p>
          <div className="project-links">
            <a href="https://github.com/akshitha66/PlaceFinder" target="_blank" rel="noreferrer">GitHub</a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
