import React from "react";
import "./Header.css";

function Header() {
  const handleNameClick = () => {
    window.location.href = "/";
  };

  return (
    <header className="header">
      <button
        className="header__name header__hover-effect"
        onClick={handleNameClick}
        tabIndex={0}
      >
        Mohit Kumar Sharma
        <span className="header__underline"></span>
      </button>
      <a
        className="header__resume header__hover-effect"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
        <span className="header__underline"></span>
      </a>
    </header>
  );
}

export default Header;
