import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './style.css';


const ProjCard = (props) => {

  const [show, setShow] = useState(false);

  const showMe = () => setShow(true);
  const hideMe = () => setShow(false);
  
    return (
<div>
<Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="/about">
      <Nav.Item>
        <Nav.Link href="/about" onClick = {showMe}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/technologies" onClick = {showMe}>Technologies</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/repo">
          Github Repo
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/deployedSite">
          Deployed
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Img variant="middle" src={props.image} />
    <Card.Text >
      {props.description}
    </Card.Text>
    <Card.Text>
      <h5>Technologies used for this application:</h5>
      {props.technologies}
    </Card.Text>
    <Card.Text>
      <h5>Github Repo:</h5>
      
      <Button variant="primary" href ={props.repo}>See Github Repo!</Button> 
    </Card.Text>
    <Card.Text>
      <h5>Deployed App:</h5>
      <Button variant="primary" href = {props.deployed}>See Deployed App!</Button> 
    </Card.Text>
    
  </Card.Body>
</Card>  
</div>
    )
}

export default ProjCard;