import React from "react";

const Resume = () => {
     const handleDownload = () => {
       const downloadLink =
         "https://drive.google.com/uc?export=download&id=1FKYBWPorSbREULTft_yqoJXy8eYKu3CF";
       const a = document.createElement("a");
       a.href = downloadLink;
       document.body.appendChild(a);
       a.click();
       document.body.removeChild(a);
     };

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Resume</h2>
      <button
        onClick={handleDownload}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
      >
        Download Resume
      </button>
    </section>
  );
};

export default Resume;
