import React from "react";
import {Link} from 'react-scroll'
import './style.css';



const Nav = () => {

 
 
    return (
        <>
        
      <nav className="navbar sticky-top navbar-expand-lg navbar-light navSt">
      <div className="logo">
          

          <h3 className="gfont">Cassondra <br></br> Reinsel</h3>
        </div>
     
    
      <div className="collapse navbar-collapse nav-menu mr-auto justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="section1" smooth duration={1500}><p className="text-white">About</p> <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="section2" smooth duration={1000}><p className="text-white">Portfolio</p></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="section3" smooth duration={1000}><p className="text-white">Contact</p></Link>
          </li>
        </ul>
        
      </div>
    </nav>
    </>
    
       
     
    );
  };
  
  export default Nav;
