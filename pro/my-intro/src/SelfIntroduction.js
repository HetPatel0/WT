// src/SelfIntroduction.js
import React from "react";
import "./SelfIntroduction.css"; // You'll create this file for custom CSS.

const SelfIntroduction = () => {
  return (
    <div className="intro-container">
      <h1 className="intro-title">Hello, I'm Het Bhuva</h1>
      <p className="intro-subtitle">Software Engineer</p>
      <p className="intro-description">
        I am a passionate software engineer with experience in building web applications using the MERN stack. I enjoy creating solutions that solve real-world problems and continuously strive to improve my skills and learn new technologies.
      </p>
      <div className="skills">
        <h2>Skills:</h2>
        <ul>
          <li>MERN Stack (MongoDB, Express, React, Node)</li>
          <li>JavaScript / TypeScript</li>
          <li>HTML / CSS</li>
          <li>Version Control (Git)</li>
          <li>Cloud Services (AWS, Heroku)</li>
        </ul>
      </div>
      <div className="contact">
        <h2>Contact Me:0000</h2>
        <p>Email:hetp5852@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile">linkedin.com/in/your-profile</a></p>
      </div>
    </div>
  );
};

export default SelfIntroduction;
