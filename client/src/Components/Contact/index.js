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
  <img src = "assets/images/git.png" alt= "git" class="icons"/>
  <img src = "assets/images/linkedin.png" alt= "linkedin" class="icons"/>
  </div>
</Jumbotron>  
</>
    )
}

export default Contact;