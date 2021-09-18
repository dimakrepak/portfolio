import "./contact.scss";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [messageSent, setMessageSent] = useState("");

  function handleFormChange(e) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        url: "/api/email",
        data: contact,
      });
      if (res.status === 200) {
        setMessageSent("Your message sent successfully to Dmitry");
      }
    } catch (e) {
      setMessageSent("One of the fields is empty or incorrect");
      console.log(e);
    }
  }
  console.log(contact);
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.svg" alt="" />
      </div>
      <div className="right">
        <h1>Get in touch.</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleFormChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleFormChange}
          ></textarea>
          <button type="submit">Send</button>
          {messageSent && <span>{messageSent}</span>}
        </form>
      </div>
    </div>
  );
}
