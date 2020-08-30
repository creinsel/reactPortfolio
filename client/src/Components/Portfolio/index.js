import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';


const Portfolio = (props) => {
    return (
<div>
<Jumbotron>
  <h1>Portfolio</h1>
  <div className="card">
  <div className="card-body">
    <p className="card-text">This image is in the middle</p>
  </div>
  <img src={props.image} alt={props.name}/>
  <div className="card-body">
    <p className="card-text">of a card.</p>
  </div>
  </div>
</Jumbotron>  
</div>
    )
}

export default Portfolio;