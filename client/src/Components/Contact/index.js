import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import './style.css';


const Contact = () => {
    return (
<>
<Jumbotron className="container">
  <h1>Contact</h1>
 
 <div className="justify-content-center">
  <img src = "assets/images/emailN.jpg" alt= "email" class="icons"/>
  <a href="https://github.com/creinsel" target="_blank"><img src = "assets/images/git.png" alt= "git" class="icons"/></a>
  <a href= "https://www.linkedin.com/in/cassondra-reinsel-1a195840/"><img src = "assets/images/linked2.png" alt= "linkedin" class="icons"/></a>
  </div>
</Jumbotron>  
</>
    )
}

export default Contact;