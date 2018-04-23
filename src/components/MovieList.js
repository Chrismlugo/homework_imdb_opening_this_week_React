import React, {Component} from 'react';
import Movie from "./Movie";


class MovieList extends Component {
  render(){
    const MovieNodes = this.props.data.map(movie =>{
      return(
        <Movie title={movie.title} key={movie.id}>{movie.showings}</Movie>
      );
    });
    return <div className="movieList">{MovieNodes}</div>;
  }
}

export default MovieList;
