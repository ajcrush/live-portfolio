import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import ConfettiBackground from "./components/ConfettiBackground";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <ConfettiBackground />
      <Header />
      <main className="main-section">
        <MainContent />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
