import React from 'react';
import {movieDetails} from './action/movie';
import {Logout} from './action/admin';
import {connect} from 'react-redux';
import MovieList from './MovieList';
import {preCart} from './action/preCart';


const mapDispatchToProps = (dispatch) =>{
   return {
      movieDetails: () => dispatch(movieDetails()),
      Logout: () => dispatch(Logout()),
      preCart: (book) => dispatch(preCart(book))
   }
}
const mapStateToProps = (state) =>{

  return {
    movie : state.movieDetails.movie,
    user :  state.userDetails.user,
    location :  state.userDetails.location
  }
}
class Home extends React.Component{
   constructor(props){
     super(props);
     this.state={
       movie:[],
       popularity:0,
       language:"",
       movie_name:""
     }
     this.popularity = this.popularity.bind(this);
     this.language = this.language.bind(this);
     this.book = this.book.bind(this);
     this.movieSearch = this.movieSearch.bind(this);
   }
 componentDidMount(){
  const city = this.props.location?this.props.location : "Chennai";
  this.setState({movie:this.props.movie[city]});
 }
 componentDidUpdate(oldProps, oldState){
   if(this.props.location!== oldProps.location){
      const city = this.props.location?this.props.location : "Chennai";
  this.setState({movie:this.props.movie[city]});
   }
 }

   popularity(value){
      const city = this.props.location?this.props.location : "Chennai";
     let movieList=this.props.movie[city];
     if(this.state.movie_name.length>2){
       movieList=movieList.filter(movies=>{
         return movies.movie_name.toLowerCase().indexOf(this.state.movie_name.toLowerCase())!=-1;
       });
     }
     if(value){
       if(value>0 && this.state.language){
        movieList=movieList.filter(movies=>{
              return movies.rating==value && movies.language==this.state.language;
          });
        }else if(value>0 &&  !this.state.language){
          movieList=movieList.filter(movies=>{
              return movies.rating==value;
          });
        }
     }
     this.setState({movie:movieList,popularity:value});
   }
  language(value){
    const city = this.props.location?this.props.location : "Chennai";
    let movieList=this.props.movie[city];
  if(this.state.movie_name.length>2){
       movieList=movieList.filter(movies=>{
         return movies.movie_name.toLowerCase().indexOf(this.state.movie_name.toLowerCase())!=-1;
       });
     }
     if(value){
       if(value && this.state.popularity>0){
        movieList=movieList.filter(movies=>{
              return movies.rating==this.state.popularity && movies.language==value;
          });
        }else if(value && this.state.popularity<1){
          movieList=movieList.filter(movies=>{
              return movies.language==value;
          });
        }
     }
     this.setState({movie:movieList,language:value});
  }
  movieSearch(val){
    const city = this.props.location?this.props.location : "Chennai";
    let movieList=this.props.movie[city];
    if(val.length>1){
       movieList=movieList.filter(movies=>{
         return movies.movie_name.toLowerCase().indexOf(val.toLowerCase())!=-1;
       });
    }else{
      movieList=this.props.movie[city];
    }
    if(this.state.language && this.state.popularity>0){
        movieList=movieList.filter(movies=>{
              return movies.rating==this.state.popularity && movies.language==this.state.language;
          });
    }else if(this.state.language && this.state.popularity<1){
          movieList=movieList.filter(movies=>{
              return movies.language==this.state.language;
          });
    }else if(this.state.popularity>0 &&  !this.state.language){
          movieList=movieList.filter(movies=>{
              return movies.rating==this.state.popularity;
          });
        }
    
    this.setState({movie:movieList,"movie_name":val});
  }
  logout(){
    localStorage.setItem('uname','');
    localStorage.setItem('pwd','');
    this.props.Logout();
    this.props.history.push('/');
  }
  book(movie){
    this.props.preCart(movie);
    this.props.history.push('/moviedetails');
  }
   render(){
     return(
       <div>
             <div className="MovieListToNewp">
              <div className="movieList"><MovieList movie={this.state.movie} popularity={this.popularity} language={this.language} book={this.book} movieSearch={this.movieSearch}/></div>
            </div>
     </div>);
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);