import React, { useState } from "react";
import "./QueryBox.css";

const QueryBox = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
  const phoneNumber = "917066620673"; 

  const message = `Hello, I have a query:%0A
Name: ${form.name}%0A
Email: ${form.email}%0A
Message: ${form.message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");
};

  return (
    <div className="query-section">
      <h2>Send Your Query</h2>

      <div className="query-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Query..."
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button onClick={handleSend}>Send Message</button>
      </div>
    </div>
  );
};

export default QueryBox;