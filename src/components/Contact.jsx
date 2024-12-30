import React from "react";

const Contact = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-4 sm:space-y-0">
        <a
          href="https://www.linkedin.com/in/ujjaval-beniwal-17420a240/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
        >
          <i className="fab fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/youbee22"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg flex items-center justify-center space-x-2 hover:bg-gray-900 transition"
        >
          <i className="fab fa-github"></i>
          <span>GitHub</span>
        </a>
        <a
          href="mailto:ujjaval22beniwal@gmail.com"
          className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition"
        >
          <i className="fas fa-envelope"></i>
          <span>Personal Email</span>
        </a>
        <a
          href="mailto:ujjavalb.ug21.ec@nitp.ac.in"
          className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition"
        >
          <i className="fas fa-envelope"></i>
          <span>College Email</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
