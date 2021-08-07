import React from 'react'
import './Header.css';

function Header() {
    return (
        <div className= "header">
            <img
              className= "header_icon"
              src= {process.env.PUBLIC_URL + "/logo.png"}
              alt= "" 
            />
        </div>
    )
}

export default Header
