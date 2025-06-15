import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import "./SocialLinks.css";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="mailto:mohitanand8987@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </a>
      <a
        href="https://github.com/ajcrush"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mohit-kumar-sharma-027950315/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.hackerrank.com/profile/mohitanand8987"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaHackerrank />
      </a>
      <a
        href="https://leetcode.com/u/mohit_sharma404/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode />
      </a>
      <a
        href="https://www.geeksforgeeks.org/user/mohitanand8987/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGeeksforgeeks />
      </a>
    </div>
  );
}

export default SocialLinks;
