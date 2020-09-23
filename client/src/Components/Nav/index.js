import React from "react";
import Contact from "../Contact";
import About from "../About";
import Portfolio from "../Portfolio";
import './style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Nav = () => {

  const goAbt = () =>(
     <Router>
  <Switch>
    <Route exact path="/" component={About} />
  </Switch>
</Router>
  )

  const goPort = () =>(
    <Router>
 <Switch>
   <Route exact path="/portfolio" component={Portfolio} />
 </Switch>
</Router>
 )

 const goCont = () =>(
  <Router>
<Switch>
 <Route exact path="/contact" component={Contact} />
</Switch>
</Router>
 )
 
    return (
        <>
        
      <nav className="navbar sticky-top navbar-expand-lg navbar-light navSt">
      <div className="logo">
          

          <h3 className="gfont">Cassondra <br></br> Reinsel</h3>
        </div>
     
    
      <div className="collapse navbar-collapse nav-menu mr-auto justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" onClick={goAbt}><p className="text-white">About</p> <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={goPort} ><p className="text-white">Portfolio</p></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={goCont}><p className="text-white">Contact</p></a>
          </li>
        </ul>
        
      </div>
    </nav>
    </>
    
       
     
    );
  };
  
  export default Nav;
