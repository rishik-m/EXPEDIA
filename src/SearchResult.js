import React from 'react'
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult(props) {
    return (
        <div className= "seacrh-result">
            <img src= {props.img} alt= "" />
            <FavoriteBorderIcon className= "search-heart" />
            <div className= "search_result-det">
               <div className= "search_result-up">
                    <p> {props.location} </p>
                    <h3> {props.title} </h3>
                    <p>_____</p>
                    <p> {props.description} </p>
               </div>
               <div className= "search_result-bottom">
                    <div className= "search-star">
                        <StarIcon className= "star" />
                        <p> <bold> {props.star} </bold> </p>
                    </div>
                    <div className= "search-price">
                        <h2> {props.price} </h2>   
                    </div>
               </div>
            </div>
        </div>
    )
}

export default SearchResult
