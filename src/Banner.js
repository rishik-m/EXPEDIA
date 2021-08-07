import React, { useState } from 'react'
import './Banner.css';
import Button from '@material-ui/core/Button';

function Banner() {

    const [search, setSearch] = useState(false);

    function handleClick() {
        setSearch(true);
    }

    return (
        <div className= "banner">
           <div className= "search_date">
                {search && <h1> Show Date Picker </h1>}
                <Button onClick= {handleClick} className= "search_date-button" variant= "outlined">
                    Search Dates
                </Button>
           </div>
           <div className= "banner-info">
                <h1> Not sure where to go? Perfect.</h1>
                <h5> Unique activities with local experts – in person or online. </h5>
                <Button variant= "outlined"> Explore Places </Button>
           </div>
        </div>
    )
}

export default Banner
