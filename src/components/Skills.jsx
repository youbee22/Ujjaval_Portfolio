
import React from "react";
import Icon from "../assets/react (1).svg";
import SQL from "../assets/database-sql.svg"
import ML from "../assets/machine-learning-model.svg"
import Excell from "../assets/microsoft-excel.svg"
import BI from "../assets/powerbi.svg"
import Py from "../assets/logo-python.svg"

const skills = [
  { icon: Icon, name: "React" },
  { icon: Py, name: "Python" },
  { icon: Excell, name: "MS Excell" },
  { icon: ML, name: "Machine Learning" },
  { icon: BI, name: "Power BI" },
  { icon: SQL, name: "MySQL" },
];

const Skills = () => {
  return (
    <section className="py-16">
      <h2 className="text-6xl font-bold text-center text-gray-800 mb-16">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 text-center font-medium text-gray-800 hover:scale-105 transition-transform"
          >
            <div className="flex justify-center items-center mb-4">
              <img src={skill.icon} alt="" className="w-16 h-16" />
            </div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
