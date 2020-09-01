import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './style.css';


const ProjCard = (props) => {

  const [show, setShow] = useState(false);

  const showTech = () => setShow(true);
  const showAbt = () => setShow(false);
  
    return (
<div>
<Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="/about">
      <Nav.Item>
        <Nav.Link href="/about" onClick = {showAbt}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/technologies" onClick = {showTech}>Technologies</Nav.Link>
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
    <Card.Img variant="middle" src="{props.image}" />
    <Card.Text>
      {props.description}
    </Card.Text>
    <Card.Text>
      <h5>Technologies used for this application:</h5>
      {props.technologies}
    </Card.Text>
    <Card.Text>
      <h5>Github Repo:</h5>
      {props.repo}
    </Card.Text>
    <Card.Text>
      <h5>Deployed Site:</h5>
      {props.deployed}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>  
</div>
    )
}

export default ProjCard;