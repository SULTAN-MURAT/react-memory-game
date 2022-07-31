import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span>Coded by Murat-Han</span>
        <a
          href="https://www.linkedin.com/in/murat-han-470716128/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="icons" />
        </a>
        <a
          href="https://github.com/Murat-Han"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="icons" />
        </a>
      </div>
      <div>Copy Right &copy; {new Date().getFullYear()}</div>
    </footer>
  );
}

export default Footer;
