import React from "react";
import "../style/email.css";

function Email() {
  return (
    <div className="contact-section" id="contact">
      <h1 className="contact-title">Contact Me</h1>
      <link
        href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="contact-container">
        <div className="contact-details">
          <h5 className="contact-subtitle">Lets Connect</h5>
          <p className="contact-description">
            I am currently looking for new opportunities. My inbox is always open.
            Whether you have a question or just want to say hi I will try my best
            to get back to you!
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Rooh-U-Din"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <i className="bx bxs-envelope social-icon"></i>
            <span className="email-text">fidajokhio2@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
