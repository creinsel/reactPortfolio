import React from "react";
import {Jumbotron} from 'react-bootstrap';
import {Col, Row} from '../Grid';
import TextLoop from "react-text-loop";
import './style.css';


const About = () => {

    return (
        <>
       <Jumbotron className="jHeight backAt">
         <div className="container">
         
  
<Row className="m-1">
  <Col size= "md-3">
  <img class="imgAbt" src= "assets/images/casImg.jpg"/>
  </Col>
  <Col size="md-1"></Col>
  <Col size = "md-8">
  <h1 className ="animTxt gfont">
                <TextLoop>
                    <span>Hi I'm Cassondra, Full Stack Developer.</span>
                    <span>Check Out My Projects!</span>
                    <span>and Feel Free to Contact me!</span>
                    
                </TextLoop>{" "}
                
            </h1>

  </Col>
  </Row>
  </div>
</Jumbotron>  
       
     </>
    );


}

export default About;