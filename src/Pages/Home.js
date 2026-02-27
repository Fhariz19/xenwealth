import React from "react";
import "../App.css";

import advisor from "../assets/advisor.png";
import solution from "../assets/solution.png";
import transparent from "../assets/transparent.png";
import partnership from "../assets/partnership.png";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1>Empowering Your Financial Future</h1>
            <p className="lead">
              XENWEALTH provides trusted financial advisory services tailored for
              individuals, families, and businesses.
            </p>

            <div className="cta-row">
              <a className="btn primary" href="/contact">
                Book Consultation
              </a>
              <a className="btn ghost" href="/services">
                Learn More
              </a>
            </div>
          </div>

          {/* CAREER FEATURE BOX */}
          <div className="featured-service">
            <h3>Join Our Team</h3>
            <p>
              Build a meaningful career in financial advisory.
              Grow professionally, expand your network, and make a real impact.
            </p>

            <a href="/career" className="btn ghost">
              Explore Careers
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="container section">
        <h2>Why Choose XENWEALTH</h2>

        <div className="why-grid">
          <div className="why-card">
            <img src={advisor} alt="Professional Advisors" />
            <h4>Professional Advisors</h4>
            <p>
              Our team consists of certified and experienced financial professionals
              who bring deep industry knowledge and proven expertise.
            </p>
          </div>

          <div className="why-card">
            <img src={solution} alt="Tailored Solutions" />
            <h4>Tailored Solutions</h4>
            <p>
              We design personalized strategies based on your lifestyle,
              risk tolerance, and long-term objectives.
            </p>
          </div>

          <div className="why-card">
            <img src={transparent} alt="Trusted Advisory Approach" />
            <h4>Trusted Advisory Approach</h4>
            <p>
              Our recommendations are built on integrity, expertise,
              and a commitment to delivering lasting value.
            </p>
          </div>

          <div className="why-card">
            <img src={partnership} alt="Long-Term Partnership" />
            <h4>Long-Term Partnership</h4>
            <p>
              Supporting you through every stage of your financial journey.
            </p>
          </div>
        </div>
      </section>

      {/* OFFICE SECTION */}
      <section className="office-section">
        <h2>Operation Schedule</h2>

        <p className="office-note">
          The service is available at our Damansara Intan office from
          <strong> 9.00 a.m. to 6.00 p.m.</strong>
          <br />
          Please note that we are closed on public holidays.
        </p>

        <div className="schedule-card">
          <table>
            <thead>
              <tr>
                <th>Branch</th>
                <th>Day</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Block A, Lobby 8, Level 10, Damansara Intan, Selangor</td>
                <td>Monday – Friday</td>
                <td>9.00 a.m. – 6.00 p.m.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <a href="/contact" className="appointment-btn">
          Schedule An Appointment
        </a>

        <div className="map-section">
          <iframe
            title="XENWEALTH Office Location"
            src="https://www.google.com/maps?q=Damansara%20Intan%20Selangor&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
