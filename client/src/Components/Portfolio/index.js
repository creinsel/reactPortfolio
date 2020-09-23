import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProjCard from '../ProjCard';
import projects from '../../projects.json';
import './style.css';



const Portfolio = () => {
    return (
<div>
<Jumbotron className ="container">
  <h1 className="gfont text-center">Portfolio</h1>
  <div className="projects">
  {projects.map(project => (
    <ProjCard 
    key={project.id}
    name={project.name}
    image={project.image}
    description={project.description}
    technologies={project.technologies}
    deployed={project.deployed}
    repo={project.repo}
    />
  ))}
  </div>
</Jumbotron>  
</div>
    )
}

export default Portfolio;