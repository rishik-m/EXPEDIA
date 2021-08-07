import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className= "header">
            <img
              className= "header_icon"
              src= {process.env.PUBLIC_URL + "/logo.png"}
              alt= "" 
            />
            <div className= "header_cent">
              <input type= "text" placeholder= "Start your search" />
              <SearchIcon />
            </div>
            <div className= "header_right">
              <p> Become a host </p>
              <LanguageIcon />
              <div className= "header_right-two">
                <ViewHeadlineIcon />
                <Avatar />
              </div>
            </div>
        </div>
    )
}

export default Header
