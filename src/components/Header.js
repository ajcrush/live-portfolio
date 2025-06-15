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
        href="https://drive.google.com/file/d/1bVt3CIVqI9SYBfB9wVs2SNqhG8DfaaCZ/view?usp=drive_link"
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
