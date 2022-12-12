import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import "./footer.css";

export function Footer() {
  const { pathname } = useLocation();

  return (
    <div
      className={`bg-black txt-white txt-center footer-wrapper ${
        pathname == "/products" && "margin-bottom"
      }`}
    >
      <footer className="py-1">
        <p>Designed and developed by Raedal Tech Solutions</p>
        <text>Visit www.raedaltech.com</text>
        <div className="social-links">
          <a href="https://twitter.com/RaedalTech" className="mr-sm">
            <FaTwitterSquare fontSize="1.5rem" />
            <span className="visually-hidden">Twitter</span>
          </a>
          <a href="https://github.com/32dantey" className="mr-sm">
            <FaGithubSquare fontSize="1.5rem" />
            <span className="visually-hidden">Github</span>
          </a>
          <a href="https://www.linkedin.com/in/raedal-tech-solutions-43764b254/">
            <FaLinkedin fontSize="1.5rem" />
            <span className="visually-hidden">LinkedIn</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
