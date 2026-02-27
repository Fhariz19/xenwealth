import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-grid">

        <div className="service-card dark">
          <h3>COVERAGE SOLUTION</h3>
          <p>
            Our Coverage Solution service provides personalized insurance & takaful
            plans tailored to protect your assets, health, and financial future.
            We assess your unique needs and offer comprehensive policies that
            ensure you and your loved ones are well-protected against unforeseen
            events, giving you peace of mind.
          </p>
        </div>

        <div className="service-card light">
          <h3>LEGACY MANAGEMENT</h3>
          <p>
            Legacy Management offers expert guidance in estate planning to
            preserve and transfer your wealth according to your wishes.
            We help you create a strategic plan for your estate, minimizing
            taxes and legal complications while ensuring your legacy is honored
            and protected for future generations.
          </p>
        </div>

        <div className="service-card light">
          <h3>RETIREMENT STRATEGIES</h3>
          <p>
            Retirement Strategies focuses on helping you build a secure and
            comfortable future. We provide personalized retirement planning
            services, including advice on savings and pension schemes, ensuring
            you have the financial resources to enjoy your retirement years
            without worry.
          </p>
        </div>

        <div className="service-card dark">
          <h3>EDUCATION FUNDING</h3>
          <p>
            Education Funding services are designed to help you invest in your
            children’s academic future. We create customized savings plans and
            investment strategies to ensure you can afford the best educational
            opportunities for your children, setting them up for success.
          </p>
        </div>

      </div>
    </section>
  );
}
