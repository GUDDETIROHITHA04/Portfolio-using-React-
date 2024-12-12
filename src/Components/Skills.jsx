// Skills.js
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import '../Styles/Portfolio.css';

function Skills() {
  const skills = [
    { icon: <FaHtml5 className="html-icon" />, name: 'HTML5' },        
    { icon: <FaCss3Alt className="css-icon" />, name: 'CSS3' },       
    { icon: <FaJs className="js-icon" />, name: 'JavaScript' },    
    { icon: <FaReact className="react-icon" />, name: 'React' },        
    { icon: <FaNodeJs className="nodejs-icon" />, name: 'Node.js' },     
    { icon: <FaJava className="java-icon" />, name: 'Java' },         
    { icon: <SiMongodb className="mongodb-icon" />, name: 'MongoDB' },    
    { icon: <SiExpress className="express-icon" />, name: 'Express.js' }, 
    { icon: <FaDatabase className="mysql-icon" />, name: 'MySQL' },     
    { icon: <FaPython className="python-icon" />, name: 'Python' },     
  ];

  return (
    <section id="skills" className="skills bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="skills-container d-flex flex-wrap justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="skills-box text-center m-3 p-3">
              <div className="icon display-4 mb-3">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div><br/><hr/>
    </section> 
  );
}

export default Skills;
