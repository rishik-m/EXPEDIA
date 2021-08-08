import React, { useState } from 'react'
import './Banner.css';
import Button from '@material-ui/core/Button';
import Search from './Search';

function Banner() {

    const [search, setSearch] = useState(false);

    function handleClick() {
        setSearch(!search);
    }

    return (
        <div className= "banner">
           <div className= "search_date">
                {search && <Search />}
                <Button onClick= {handleClick} className= "search_date-button" variant= "outlined">
                    {search ? "Hide" : "Search Dates"}
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
