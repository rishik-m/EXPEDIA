import React from 'react'
import './Banner.css';
import Button from '@material-ui/core/Button';

function Banner() {
    return (
        <div className= "banner">
           <div className= "banner-info">
              <h1> Not sure where to go? Perfect.</h1>
              <h5> Unique activities with local experts – in person or online. </h5>
              <Button variant= "outlined"> Explore Places </Button>
           </div>
        </div>
    )
}

export default Banner
