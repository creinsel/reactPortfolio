import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const Email = () =>{
    const [show, setShow] = useState(false);

    const showEmail = () =>{
     setShow(true);
    }
    
    const hideEmail = () =>{
      setShow(false);
    }
    return(
        <>
     <a > <img src = "assets/images/emailN.jpg" alt= "email" className="icons" onClick={showEmail}/> </a>

     <Modal show={show} onHide={hideEmail}>
     <Modal.Header closeButton>
     <Modal.Title className="modal-title">
       Cassondra's Email
     </Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <p>casreinsel@gmail.com</p>
   </Modal.Body>
   <Modal.Footer>
     <Button onClick={hideEmail}>Close</Button>
   </Modal.Footer>
 </Modal>
 </>
    );
  
};
  export default Email;