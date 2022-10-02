import React from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  return (
    <header>
    <h2 className = "logo">Confluent NGOs</h2>
    <nav>
        <ul className = "navbar_links">
            <li><Link to={"/"}> Home </Link></li>
            <li><Link to={"/mdonate"}> Donate </Link></li>
            <li><Link to={"/needblood"}> Need Blood </Link></li>
            {/* <li><Link to={"#"}> Campaings </Link></li> */}
            <li><Link to={"#"}> Contact Us </Link></li>
        </ul>
    </nav>
    <div className="login">
        <Link to={"/login"}>NGO Login </Link>
    </div>
</header>

  )
}

export default Navbar