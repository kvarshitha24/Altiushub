import React from 'react'
import {Link} from 'react-router-dom'


// import { SiTheboringcompany } from "react-icons/si";
function Navbar() {

  return (
    <div>
      <ul className="nav bg-light justify-content-end ">

        <li className="nav-item">
          <Link className=" nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className=" nav-link active" to="/Register">Register</Link>
          </li>

 
          <li className="nav-item">
          <Link className=" nav-link active" to="/Login">Login</Link>
          </li>



        
      </ul>

    </div>
  )
}

export default Navbar