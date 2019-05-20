import React from 'react';
import MovieSearch  from './MovieSearch';
import {connect} from 'react-redux';
const mapStateToProps = (state) =>{
  return {
    cartDetails : state.preCartDetails.preCart
  }
}
export default class MovieList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<div>
      <div className="HeaderTitle"> Movies Now in Theater </div>
      <MovieSearch popularity={this.props.popularity} language={this.props.language}  movieSearch={this.props.movieSearch} />
       {this.props.movie && this.props.movie.map((movies,index) => {
          let classImg = (index%2===0)?'even':'odd';
         return (
           <div key={index}>
             <div className="MovieList">
                  <div className={classImg}></div>
                  <div className="movieName">
                  {movies.movie_name}
                  </div>
                    <div className="language">
                    {movies.language}
                  </div>
                    <div className="type">
                    {movies.type}
                  </div>
                  <div className="rating">
                    {movies.rating}
                  </div>
                  <div className="book"><button onClick={()=>this.props.book(movies)}>Book</button></div>
              </div>
           </div>
         )
       })}
    </div>);
  }
}
