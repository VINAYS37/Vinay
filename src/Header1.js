import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Application(){  
  const [color, setColor] = useState("blue");      
    return(
      <div>
        <nav>
        <Link to="/" style={{textDecoration:"none"}}><li>Home</li></Link>
        <Link to="/services" style={{textDecoration:"none"}}><li>services</li></Link>
        <Link to="/about" style={{textDecoration:"none"}}><li>about</li></Link>
        <Link to="/contact" style={{textDecoration:"none"}}><li>contact</li></Link>
        <Link to="/login" style={{textDecoration:"none"}}><li>Login</li></Link>
        <Link to="/register" style={{textDecoration:"none"}}><li>Register</li></Link>
        </nav>
        </div>
    
    );
}
export default Application;