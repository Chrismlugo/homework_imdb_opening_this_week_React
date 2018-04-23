import React, {Component} from 'react';
import MovieList from "../components/MovieList";


class MovieBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [{id:1, title: "Sausage Party", showings:["12:30 ", "14:15 ", "16:45 ", "19:30 ", "21:00 "]},
      {id:2, title: "Cafe Society", showings:["13:00 ", "15:40 ", "16:30 ", "20:10 ", "22:00 "]},
      {id:3, title: "Morgan", showings:["12:00 ", "15:30 ", "17:15 ", "20:30 "]},
      {id:4, title: "The 9th Life of Louis Drax", showings:["11:45 ", "14:00 ", "16:30 ", "19:30 "]},
      {id:5, title: "Nam Hai Akira", showings:["13:00 ", "15:15 ", "16:50 ", "20:00 "]},
      {id:6, title: "Equity", showings: ["12:00 ", "15:45 ", "17:10 ", "20:40 "]},
      {id:7, title: "Things to come", showings:["14:15 ", "16:30 ", "19:20 ", "21:10 "]}]

    };
  }


  render(){
  return (<div className="movie-box">
    <h3>UK Opening This Week</h3>
    <MovieList data={this.state.data}/>

  </div>
);
}
}

export default MovieBox;
