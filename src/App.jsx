import React from "react";
import ChatBot from "./components/ChatBot";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import BG_IMG from "./assets/background.jpeg";

function App() {
  return (
    <div
      className="min-h-screen text-gray-800"
      style={{
        backgroundImage: `url(${BG_IMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <Introduction />
        <Skills />
        <Resume />
        <Contact />
      </div>
      <ChatBot />
    </div>
  );
}

export default App;
