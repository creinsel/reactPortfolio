import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProjCard from '../ProjCard';
import projects from '../../projects.json';



const Portfolio = () => {
    return (
<div>
<Jumbotron className ="container">
  <h1>Projects</h1>
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
  
</Jumbotron>  
</div>
    )
}

export default Portfolio;