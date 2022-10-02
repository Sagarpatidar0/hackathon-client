import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className="footer">
        <div className="self_info">
            <h3>Hack Elits</h3>
            <p>We are aiming to acchive Sustainable Development Goal 2 & 3 by synergizing the Health-Aid sector with the Food and Agriculture sector along with public support, by creating a common platform on which they can interact together , results in enhancing their overall efficacy.</p>
        </div>
 
        <div className="contact_info">
            <ul className= "Footer_links">
                <li><Link to={"#"}> Home </Link></li>
                <li><Link to={"#"}> Donate </Link></li>
                <li><Link to={"#"}> Need Blood </Link></li>
                <li><Link to={"#"}> Campaings </Link></li>
                <li><Link to={"#"}> Contact Us </Link></li>
            </ul>
        </div>
       
        <div className="connect">
            <div className="icons">
                <p className="Pconnect"> Follow us on </p>
                <i className="fa fa-brands fa-facebook-f"></i>
                <i className="fa fa-brands fa-twitter"></i>
                <i className="fa fa-brands fa-instagram"></i>
                <i className="fa fa-solid fa-envelope"></i>
            </div>
        </div>
 
    </div>
 
    <div className="copyrite">
        © Copyright 2022, All Rights Reserved by Hack Elites.
    </div>
    </div>
  )
}

export default Footer