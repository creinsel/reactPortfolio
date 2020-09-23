import React from "react";
import {Jumbotron} from 'react-bootstrap';
import {Col, Row} from '../Grid'
import './style.css';


const About = () => {

    return (
        <>
       <Jumbotron className="container top blueCom">
         <Row className="m-1">
           <Col size = "md-12">
         <h1 className="m-1 gfont text-center">About</h1>
         </Col>
         </Row>
  
<Row className="m-1">
  <Col size= "md-3">
  <img class="imgAbt" src= "assets/images/casImg.jpg"/>
  </Col>
  <Col size = "md-9">
  <p>
  Full Stack Developer with extensive experience in the education/public service industry.  Recently earned a certificate in Full Stack Development through the UC Berkeley Extension program. Familiar with technologies such as Javascript, HTML, Node.js, React, Express, Handlebars, etc. With a background as a former educator, extremely efficient at meeting deadlines, thinking critically, and using creativity to complete work.  Love learning from others in a collaborative environment and am passionate about creating web applications that are both functional and aesthetic. 
.
  </p>
  </Col>
  </Row>
</Jumbotron>  
       
     </>
    );


}

export default About;