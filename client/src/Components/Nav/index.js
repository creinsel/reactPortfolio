import React from "react";


const Nav = () => {
    return (
        <>
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light m-1">
      <div className="logo">
          {/* Link for app logo? */}

          <h3>Cassondra <br></br> Reinsel</h3>
        </div>
     
    
      <div className="collapse navbar-collapse nav-menu mr-auto justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/contact">Contact</a>
          </li>
        </ul>
        
      </div>
    </nav>
    </>
    
       
     
    );
  };
  
  export default Nav;
