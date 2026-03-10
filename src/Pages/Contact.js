import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  function submit(e) {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_4e5xvce",
        "template_zq81f8v",
        form.current,
        "qwI7DbssnYW9mpzrV"
      )
      .then(() => {
        setStatus("Message sent successfully! Our team will contact you soon.");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("Failed to send message. Please try again.");
      });
  }

  return (
    <section className="contact-page section">
      <div className="container contact-wrapper">
        <div className="contact-info">
          <div>
            <h1>Contact Us</h1>
            <p className="contact-intro">
              Have questions about our financial advisory services? Send us a
              message and our team will get back to you as soon as possible.
            </p>
          </div>

          <div className="contact-info-box">
            <h3>Email</h3>
            <p>xenwealthmy@gmail.com</p>
          </div>

          <div className="contact-info-box">
            <h3>Office Hours</h3>
            <p>Monday – Friday</p>
            <p>9.00 a.m. – 6.00 p.m.</p>
          </div>
        </div>

        <div className="contact-form-card">
          <form className="contact-form" ref={form} onSubmit={submit}>
            <label>
              Name
              <input name="name" required />
            </label>

            <label>
              Email
              <input name="email" type="email" required />
            </label>

            <label>
              Message
              <textarea name="message" required />
            </label>

            <button className="btn primary" type="submit">
              Send Message
            </button>

            {status && <p className="contact-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}