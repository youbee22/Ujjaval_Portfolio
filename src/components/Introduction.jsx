import React, { useState, useEffect } from "react";

const Introduction = () => {
  const fullName = "Ujjjaval Beniwal";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayedText((prev) => prev + fullName.charAt(currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(typingInterval); // Stop the interval when typing is complete
      }
    }, 150); // Adjust the speed of typing (150ms per character)

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, [fullName]);

  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl pb-8 md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        Hi, I'm
      </h1>
      <h1 className="text-4xl pb-8 md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        {displayedText}
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700">
       A passionate professional with a keen interest in data engineering specializing in Machine Learning, SQL, and problem-solving.
       My skills in SQL allow me to manage and query large datasets, while my interest in machine learning fuels my ability to apply 
       predictive models and data analysis techniques to real-world challenges.I am continuously seeking to expand my knowledge and 
       expertise, leveraging my problem-solving abilities to innovate and improve data workflows in any project I undertake.
      </p>
    </section>
  );
};

export default Introduction;
