import React, {useState} from 'react';
import Email from '../Email'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './style.css';



const Contact = () => {

    return (
<>
<Jumbotron className="container">
  <h1 className="gfont text-center">Contact</h1>
 
 <div className="contacts">
  
  <Email/>
  <a href="https://github.com/creinsel" target="_blank"><img src = "assets/images/git.png" alt= "git" className="icons"/></a>
  <a href= "https://www.linkedin.com/in/cassondra-reinsel-1a195840/"><img src = "assets/images/linked2.png" alt= "linkedin" className="icons"/></a>
  </div>
</Jumbotron>  
</>
    )
}

export default Contact;