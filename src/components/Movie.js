import React, {} from 'react';

const Movie = (props) =>
  <div className="movie">
    <h4 className="movieTitle">{props.title}</h4>
    <h5>Showtimes</h5>
    {props.children}
  </div>

export default Movie;
