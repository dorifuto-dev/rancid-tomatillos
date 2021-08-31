import React from 'react';
import './Card.css';
import { Route, Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/details/${props.id}`} className='movie-card' >
       <img className='movie-poster' src={ props.posterPath } alt={ `${props.title} poster image` }/>
    </Link>
  )
}

export default Card;
// Conditional Rendering to show indiviual cards
//put onClick on the Card click
//change to class component from function
//onClick={ () => props.showDetails(props.id)
