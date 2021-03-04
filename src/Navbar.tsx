import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container-fluid">
        

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
           
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  USERS
                </Link>
              </li>
            
              <li className="nav-item">
                <Link className="nav-link" to="userEdit">
                  EDIT
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
