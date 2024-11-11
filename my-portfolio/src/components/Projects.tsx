
import React from "react";

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="project-section">My Projects</h2>

    
      <div className="project">
        <h3>CLI Calculator</h3>
        <p>
          This is a command-line calculator built using TypeScript and Inquirer.js. 
          It allows users to perform basic arithmetic operations in the terminal.
        </p>
        <a href="https://github.com/Syedamuntahashah/simple_calculator.git" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>

    
      <div className="project">
        <h3>Number Guessing Game</h3>
        <p>
          This is a fun number guessing game built using TypeScript and Inquirer.js. 
          The player tries to guess a randomly generated number.
        </p>
        <a href="https://github.com/Syedamuntahashah/cli-number-guessing.git" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>

      
      <div className="project">
        <h3>ATM Machine Simulation</h3>
        <p>
          A simple ATM machine simulation built with TypeScript and Inquirer.js. 
          Users can check balance, withdraw money, and deposit funds.
        </p>
        <a href="https://github.com/Syedamuntahashah/ATM-Machine_.git" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>

    
      <div className="project">
        <h3>Hackathon projects</h3>
        <p>
          This is a resume builder that lets users input their personal details, education, 
          skills, and experience, generating a professional resume document.
        </p>
        <a href="https://github.com/Syedamuntahashah/Hackathon-project.git" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>

    
    </div>
  );
};

export default Projects