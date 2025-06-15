import React, { useState, useEffect } from "react";
import "./MainContent.css";

const titles = [
  "Frontend Developer",
  "Backend Developer",
  "MERN Developer",
  "React Developer",
  "Node Developer",
];

function MainContent() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    let typeSpeed = isDeleting ? 70 : 130;

    if (!isDeleting && displayedText === fullText) {
      typeSpeed = 1800;
      const pause = setTimeout(() => setIsDeleting(true), typeSpeed);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section className="main-content">
      <div className="main-content__logo">
        <span className="main-content__logo-letter">M</span>
      </div>
      <h1 className="main-content__title">
        I'm a <span className="typewriter">{displayedText}</span>
        <span className="typewriter-cursor">|</span>
      </h1>
      <p className="main-content__subtitle">
        <span role="img" aria-label="quote">
          ❝
        </span>
        Just another passionate learner in the world of code
        <span role="img" aria-label="quote">
          ❞
        </span>
      </p>
      <p className="main-content__role">
        <strong>Aspiring Software Development Engineer</strong>
      </p>
      <pre className="main-content__highlight">
        ~ Built, deployed, and scaled from scratch
      </pre>
      <div className="main-content__location">
        <span role="img" aria-label="location">
          📍
        </span>{" "}
        Chandigarh, India
      </div>
    </section>
  );
}

export default MainContent;
