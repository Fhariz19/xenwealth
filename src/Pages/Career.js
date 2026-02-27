import React, { useEffect } from "react";
import "./Career.css";

import consultImg from "../assets/career-consultation.jpg";
import strategyImg from "../assets/career-strategy.jpg";
import educationVideo from "../assets/career-education.mp4";
import teamVideo from "../assets/career-team.mp4";

export default function Career() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="career">

      {/* HERO */}
      <section className="career-hero">
        <div className="container fade-in">
          <h1>Build Your Career With XENWEALTH</h1>
          <p>
            Learn, grow, and make a real impact in the financial advisory industry
            through hands-on experience, structured mentorship, and meaningful client exposure.
          </p>

          <a
            href="https://wa.me/60168613983"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Apply via WhatsApp
          </a>
        </div>
      </section>

      {/* WHAT YOU'LL DO */}
      <section className="career-section container">

        {/* Row 1 */}
        <div className="career-row fade-in">
          <div className="career-media">
            <img src={consultImg} alt="Client Consultations" />
          </div>
          <div className="career-text">
            <h3>Client Consultations</h3>
            <p>
              Engage directly with clients to understand their financial goals,
              challenges, and life priorities while learning real-world advisory
              communication skills and relationship management.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="career-row reverse fade-in">
          <div className="career-text">
            <h3>Financial Education</h3>
            <p>
              Participate in structured learning sessions covering financial
              planning fundamentals, wealth protection strategies, and
              practical advisory frameworks guided by experienced mentors.
            </p>
          </div>
          <div className="career-media">
            <video
              src={educationVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="career-row fade-in">
          <div className="career-media">
            <img src={strategyImg} alt="Strategy and Planning" />
          </div>
          <div className="career-text">
            <h3>Strategy & Planning</h3>
            <p>
              Learn how financial strategies are crafted, reviewed, and aligned
              with both short-term needs and long-term financial security goals
              to deliver real value to clients.
            </p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="career-row reverse fade-in">
          <div className="career-text">
            <h3>Team Collaboration</h3>
            <p>
              Work closely with a supportive team through discussions,
              activities, and interactive sessions that build confidence,
              communication skills, leadership, and teamwork.
            </p>
          </div>
          <div className="career-media">
            <video
              src={teamVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

      </section>

      {/* LIFE AT XENWEALTH */}
      <section className="career-life fade-in">
        <div className="container">
          <h2>Life at XenWealth</h2>
          <ul>
            <li>Monday Power Meetings & Goal Alignment</li>
            <li>Real Client Advisory Exposure</li>
            <li>Weekly Financial Knowledge Sharing</li>
            <li>Team Bonding Activities & Games</li>
          </ul>
        </div>
      </section>

      {/* WHO WE ARE LOOKING FOR */}
      <section className="career-section container fade-in">
        <h2>Who We’re Looking For</h2>

        <div className="career-columns">
          <div>
            <h4>Internship</h4>
            <ul className="career-list">
                <li><strong>Students or fresh graduates</strong></li>
                <li><strong>Willing to learn and grow</strong></li>
                <li><strong>Interest in finance & personal development</strong></li>
                <li><strong>Positive attitude & strong work ethic</strong></li>
            </ul>
        </div>
    <div>

    <h4>Full-Time</h4>
    <ul className="career-list">
        <li><strong>Strong communication skills</strong></li>
        <li><strong>Goal-oriented mindset</strong></li>
        <li><strong>Passion for helping people financially</strong></li>
        <li><strong>Driven and self-motivated individual</strong></li>
    </ul>
</div>

        </div>
      </section>

      {/* APPLY */}
      <section className="career-apply fade-in">
        <div className="container">
          <h2>Ready to Join XENWEALTH?</h2>
          <p>
            Drop your resume via WhatsApp and start your journey with us today.
          </p>

          <a
            href="https://wa.me/60168613983?text=Hello%2C%20I%20found%20your%20career%20website%20and%20would%20like%20to%20know%20more%20about%20the%20company."
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Apply via WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
