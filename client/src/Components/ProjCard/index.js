import React from "react";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


const ProjCard = (props) => {
    return (
<div>
<Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Technologies</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="{props.repo}">
          Github Repo
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="{props.deployed}">
          Deployed
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body className= "about">
    <Card.Title>{props.name}</Card.Title>
    <Card.Img variant="middle" src="{props.image}" />
    <Card.Text>
      {props.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>

<Card.Body className="technologies">
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      <h3>Technologies used for this application:</h3>
      {props.technologies}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>  
</div>
    )
}

export default ProjCard;