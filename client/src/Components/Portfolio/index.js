import React from "react";
import './style.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProjCard from '../ProjCard';
import projects from '../../projects.json';



const Portfolio = () => {
  
    return (
<div>
<Jumbotron className="space bg-white" id="section2">
<h1 className="gfont text-center blueTxt">Portfolio</h1>
  <div className= "container ">
  <div className= "align-items-center">
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
  </div>
 
</Jumbotron>  
</div>
    )
}

export default Portfolio;