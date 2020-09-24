import React from "react";
import {Jumbotron} from 'react-bootstrap';
import {Col, Row} from '../Grid';
import TextLoop from "react-text-loop";
import './style.css';


const About = () => {

    return (
        <>
       <Jumbotron className="jHeight backAt" id="section1">
         <div className="container">
         
  
<Row className="m-1">
  <Col size= "md-2">
  <img class="imgAbt" src= "assets/images/casImg.jpg"/>
  </Col>
  <Col size="md-1"></Col>
  <Col size = "md-9">
  <h1 className ="animTxt gfont">
                <TextLoop>
                    <span>Hi I'm Cassondra, Full Stack Developer.</span>
                    <span>I'm familiar with Javascript, <br></br> React, Node, Express and more! </span>
                    <span>Feel free to check out my projects and contact me!</span>
                    
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