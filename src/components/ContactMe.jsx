import { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      termsAccepted: false,
    });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>
      </div>
      <form
        name="contact"
        method="POST"
        className="contact--form--container"
        data-netlify="true"
        data-netlify-honeypot="bot-field" /* Prevent spam */
      >
        {/* Hidden input for Netlify to recognize the form */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>

        <div className="container">
          <label className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              required
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              required
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Email (Optional)</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="text"
              className="contact--input text-md"
              name="phoneNumber"
              maxLength={10}
              required
            />
          </label>
        </div>
        <label className="contact--label message">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md message"
            name="message"
            rows="6"
            placeholder="Type your message..."
            required
          />
        </label>
        <label className="checkbox--label">
          <input type="checkbox" name="termsAccepted" required />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
