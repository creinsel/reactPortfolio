import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProjCard from '../ProjCard';
import projects from '../../projects.json';


const Portfolio = (props) => {
    return (
<div>
<Jumbotron>
  {this.projects.map(project => (
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