import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import './style.css';


const Contact = () => {
    return (
<>
<Jumbotron className="container">
  <h1>Contact</h1>
 
  <img src = "assets/images/email.png" alt= "email" class="icons"/>
  <img src = "assets/images/giticon.png" alt= "git" class="icons"/>
  <img src = "assets/images/linkedin.png" alt= "linkedin" class="icons"/>
</Jumbotron>  
</>
    )
}

export default Contact;