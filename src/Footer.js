import React from 'react'
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className= "footer">
        <p> Copyright © {currentYear} !!EXPEDIA!! All rights reserved </p>
        <p> Privacy | Terms | Sitemap | Company Details </p> 
        </div>
    )
}

export default Footer
