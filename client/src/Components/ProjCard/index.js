import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './style.css';


const ProjCard = (props) => {

  const [tech, setTech] = useState(false);
  const [desc, setDesc] = useState(true);
  const [depl, setDepl] = useState(false);
  const [repo, setRepo] = useState(false);

  const showDesc = () => {

    setTech(false);
    setDesc(true);
    setDepl(false);
    setRepo(false);

  };
  const showTech = () => {

    setTech(true);
    setDesc(false);
    setDepl(false);
    setRepo(false);

  };
  const showDepl = () => {

    setTech(false);
    setDesc(false);
    setDepl(true);
    setRepo(false);

  };
  const showRepo = () => {

    setTech(false);
    setDesc(false);
    setDepl(false);
    setRepo(true);

  };
  

    return (
<div>
<Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="/about">
      <Nav.Item>
        <Nav.Link onClick = {showDesc}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick = {showTech}>Technologies</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick = {showRepo}>
          Github Repo
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick = {showDepl}>
          Deployed
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Img variant="middle" src={props.image} alt={props.name} />
    <Card.Text >
      {desc?
      
      <div>
      {props.description}
      </div>
      : <div></div>}
    
      {tech?
      <div>
      <h5>Technologies used for this application:</h5>
      {props.technologies}
      </div>
      : <div></div>}

      {repo?
      
      <div>
      <h5>Github Repo:</h5>
      
      <Button variant="primary" href ={props.repo}>See Github Repo!</Button> 
      </div>
      : <div></div>}

      {depl?
     
      <div>
      <h5>Deployed App:</h5>
      <Button variant="primary" href = {props.deployed}>See Deployed App!</Button> 
      </div>
      :<div></div>}
    </Card.Text>
    
  </Card.Body>
</Card>  
</div>
    )
}

export default ProjCard;