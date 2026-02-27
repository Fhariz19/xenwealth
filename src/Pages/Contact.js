import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handle(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    // placeholder - you can integrate with an email service later
    alert("Thanks! We received your message.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="container section">
      <h1>Contact Us</h1>
      <p className="muted">Email: xenwealthmy@gmail.com</p>

      <form className="contact-form" onSubmit={submit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handle} required />
        </label>

        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handle} required />
        </label>

        <label>
          Message
          <textarea name="message" value={form.message} onChange={handle} required />
        </label>

        <button className="btn primary" type="submit">Send Message</button>
      </form>
    </section>
  );
}
