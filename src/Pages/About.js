import React, { useState } from "react";
import "./About.css";

import hero from "../assets/about-hero.jpg";
import vision1 from "../assets/vision1.png";
import vision2 from "../assets/vision2.png";
import vision3 from "../assets/vision3.png";
import mission1 from "../assets/mission1.png";
import mission2 from "../assets/mission2.png";
import mission3 from "../assets/mission3.png";


export default function About() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <h1>ABOUT US</h1>
        <img src={hero} alt="XenWealth Team" />
      </section>

      {/* DESCRIPTION */}
      <section className="about-desc">
        <p>
          <strong>XENWEALTH Group Enterprise</strong> is a Malaysian-based financial consultancy and digital advisory organization committed 
          to helping individuals, families, and small businesses build sustainable financial futures. We specialize in comprehensive 
          financial planning, wealth protection strategies, and long-term financial security solutions designed to adapt to every stage of 
          life.
        <p>
          
        </p>
          At <strong>XENWEALTH</strong>, we believe that sound financial decisions begin with clarity and trust. Our advisory approach focuses on understanding
          each client’s unique financial goals, risk tolerance, and lifestyle needs before crafting tailored strategies that provide both 
          stability and growth. Whether it is managing personal finances, protecting family wealth, or supporting business continuity, our 
          solutions are designed to be practical, transparent, and goal-driven.
        </p>
      </section>

      {/* VISION | MISSION */}
      <section className="vm-section">
        <h2>
          <span
            className={activeTab === "vision" ? "active" : ""}
            onClick={() => setActiveTab("vision")}
          >
            VISION
          </span>
          {" | "}
          <span
            className={activeTab === "mission" ? "active" : ""}
            onClick={() => setActiveTab("mission")}
          >
            MISSION
          </span>
        </h2>

        {activeTab === "vision" ? <Vision /> : <Mission />}
      </section>
    </>
  );
}

function Vision() {
  return (
    <div className="vm-grid">
      <div className="vm-card">
        <img src={vision1} alt="Long-term financial stability" />
        <h4>Long-term financial stability</h4>
      </div>

      <div className="vm-card">
        <img src={vision2} alt="Informed decision-making" />
        <h4>Informed and confident decision-making</h4>
      </div>

      <div className="vm-card">
        <img src={vision3} alt="Peace of mind" />
        <h4>Peace of mind through structured planning</h4>
      </div>
    </div>
  );
}

function Mission() {
  return (
    <div className="vm-grid">
      <div className="vm-card">
        <img src={mission1} alt="Client-centric advisory" />
        <h4>Client-centric advisory</h4>
      </div>

      <div className="vm-card">
        <img src={mission2} alt="Value creation" />
        <h4>Value creation for clients & community</h4>
      </div>

      <div className="vm-card">
        <img src={mission3} alt="Ethical conduct" />
        <h4>Ethical, transparent & professional conduct</h4>
      </div>
    </div>
  );
}
