import React from 'react';
import {connect} from 'react-redux';
import BookingList from './BookingList'


const mapStateToProps = (state) =>{
  //console.log(state);
  return {
    cartDetails : state.preCartDetails.preCart
  }
}

class MovieDetails extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

    return(<div>
      {this.props.cartDetails && 
           <div><div className="MovieList MovieSingle">
                  <div className="movieHeader">Movie Details</div>
                  <div className="even"></div>
                  <div className="movieName">
                  <b>Movie Name</b> :{this.props.cartDetails.movie_name}
                  </div>
                    <div className="language">
                    <b>Language</b> : {this.props.cartDetails.language}
                  </div>
                    <div className="type">
                    <b>Type</b> : {this.props.cartDetails.type}
                  </div>
                  
              </div><BookingList {...this.props} data={this.props.cartDetails} /> </div>
    }
      
    </div>);
  }
}
export default connect(mapStateToProps)(MovieDetails);