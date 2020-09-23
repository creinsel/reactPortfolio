import React, {useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './style.css';



const Contact = () => {
  const [show, setShow] = useState(false);

const showEmail = () =>{
 setShow(true);
}

const hideEmail = () =>{
  setShow(false);
}
    return (
<>
<Jumbotron className="container">
  <h1>Contact</h1>
 
 <div className="contacts">
  
 <img src = "assets/images/emailN.jpg" alt= "email" className="icons" onClick={showEmail} />
  <a href="https://github.com/creinsel" target="_blank"><img src = "assets/images/git.png" alt= "git" className="icons"/></a>
  <a href= "https://www.linkedin.com/in/cassondra-reinsel-1a195840/"><img src = "assets/images/linked2.png" alt= "linkedin" className="icons"/></a>
  </div>
</Jumbotron>  
</>
    )
}

export default Contact;